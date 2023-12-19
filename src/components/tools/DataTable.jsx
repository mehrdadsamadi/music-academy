import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { DeleteRounded, EditRounded, VisibilityRounded } from '@mui/icons-material';
import PropTypes from "prop-types"
import toast from 'react-hot-toast';

import { prompt } from '../../redux/reducers/prompt.slice';
import { createHeader } from "../../helpers/table";
import { commonDelete } from "../../services/common";

const DataTable = ({ data, disableAction = false, defaultHeaders = [] }) => {

    const [headers, setHeaders] = useState([])

    const dispatch = useDispatch()

    const handleDeleteRow = (id) => {
        dispatch(prompt({ message: "برای پاک کردن مطمعن هستید؟" }))
            .then(async () => {
                const { actionsRoutes } = data.find(row => row.id === id)
                const { message } = await commonDelete(actionsRoutes.delete)
                toast.success(message)
            })
    }

    useEffect(() => {
        if (defaultHeaders.length === 0) {
            const dataObject = data.slice()

            Object.keys(dataObject[0]).map(key => {
                const newHeader = {
                    field: key,
                    headerName: key,
                    editable: false,
                    width: 150,
                    sortable: false
                }

                setHeaders(oldHeaders => [...oldHeaders, newHeader])
            })
        } else {
            setHeaders(createHeader(defaultHeaders))
        }

        if (!disableAction) {
            setHeaders(oldHeaders => [...oldHeaders, {
                field: 'actions',
                type: 'actions',
                headerName: 'عملیات',
                width: 150,
                cellClassName: 'actions',
                getActions: ({ id }) => {
                    return [
                        <GridActionsCellItem
                            key={0}
                            icon={<EditRounded />}
                            label="Edit"
                            sx={{color: "primary.light"}}
                        />,
                        <GridActionsCellItem
                            key={1}
                            icon={<VisibilityRounded />}
                            label="show"
                            sx={{color: "warning.light"}}
                        />,
                        <GridActionsCellItem
                            key={2}
                            icon={<DeleteRounded />}
                            label="Delete"
                            sx={{color: "error.light"}}
                            onClick={() => handleDeleteRow(id)}
                        />,
                    ];
                },
            }])
        }

    }, [])

    return (
        <Box sx={{ width: 1, p: 2 }} >
            <DataGrid
                rows={data}
                columns={headers}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                editMode="row"
                sx={{
                    "&.MuiDataGrid-root": {
                        direction: "ltr",
                        transform: "rotateY(180deg)"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        borderRadius: "1rem",
                        mb: 3,
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);",
                        border: "1px solid rgba(0,0,0,0.075)"
                    },
                    "& .MuiDataGrid-columnHeader": {
                        transform: "rotateY(180deg)"
                    },
                    "& .MuiDataGrid-row": {
                        borderRadius: "1rem",
                        mb: 1,
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);",
                        border: "1px solid rgba(0,0,0,0.075)"
                    },
                    "& .MuiDataGrid-cell": {
                        border: "none",
                        transform: "rotateY(180deg)",
                        justifyContent: "center"
                    },
                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                        justifyContent: "center"
                    },
                    "& .MuiDataGrid-footerContainer": {
                        transform: "rotateY(180deg)",
                        // border: "none",
                        borderRadius: "1rem",
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);",
                        border: "1px solid rgba(0,0,0,0.075)"
                    },
                    "& .MuiDataGrid-footerContainer p": {
                        mb: 0
                    },
                    border: "none"
                }}
            />
        </Box>
    );
}

DataTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    disableAction: PropTypes.bool,
    defaultHeaders: PropTypes.array
}

export default DataTable