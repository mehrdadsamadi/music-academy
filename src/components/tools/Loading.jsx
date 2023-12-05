import { useSelector, useDispatch } from "react-redux"

import { CircularProgress, Dialog, DialogContent, DialogTitle } from "@mui/material"

import { close, selectAllLoadingState } from "../../redux/reducers/loading.slice";

const Loading = () => {

    const dispatch = useDispatch()

    const loading = useSelector(selectAllLoadingState)

    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick") 
            return;

        dispatch(close())
    };

    return (
        <Dialog onClose={handleClose} open={loading.show} sx={{"& .MuiDialog-paper": {p: 3}}}>
            <DialogTitle textAlign="center" sx={{fontWeight: "bold"}}>
                {loading?.title}
            </DialogTitle>
            <DialogContent className="pb-0 d-flex justify-content-center overflow-hidden">
                <CircularProgress color="primary"/>
            </DialogContent>
        </Dialog>
    )
}

export default Loading