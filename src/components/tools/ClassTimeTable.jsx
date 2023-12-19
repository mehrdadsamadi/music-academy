import PropTypes from "prop-types"

import { createTableTime } from "../../helpers/table"
import { DataTable } from "./"

const ClassTimeTable = ({ data, startTime = "09:00", endTime = "20:30" }) => {

    const headers = []
    const finalData = []

    headers.push({field: "master", name: "نام استاد"}, ...createTableTime(startTime, endTime))
    
    Object.keys(data).map((master, index) => {
        let classObj = {}

        data[master].data.map(classData => classObj[classData.time] = `${classData.firstname + " " + classData.lastname}`)

        finalData.push({ id: index, master, ...classObj })
    })

    return (
        <DataTable data={finalData} defaultHeaders={headers} disableAction/>
    )
}

ClassTimeTable.propTypes = {
    data: PropTypes.object.isRequired,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
}

export default ClassTimeTable