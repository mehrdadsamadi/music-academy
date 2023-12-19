export const createHeader = (headers = []) => {
    const finalHeaders = []

    headers.map(header => finalHeaders.push({
        field: header?.field || header,
        headerName: header?.name || header,
        editable: false,
        width: header?.width || 150,
        sortable: false
    }))

    return finalHeaders
}

export const createTableTime = (start, end) => {
    const finalTimes = []

    let [startHour, startMinute] = start.split(":")
    startHour = Number(startHour)
    startMinute = Number(startMinute)

    let [endHour, endMinute] = end.split(":")
    endHour = Number(endHour)
    endMinute = Number(endMinute)

    while (startHour < endHour) {
        finalTimes.push({field: `${startHour}:${startMinute === 0 ? "00" : startMinute}`, name: `${startHour}:${startMinute === 0 ? "00" : startMinute}`, width: 100})

        if (startMinute === 30) {
            startHour += 1
            startMinute = 0
        } else {
            startMinute += 30
        }
    }

    finalTimes.push({ field: `${endHour}:00`, name: `${endHour}:00`, width: 100 })
    endMinute === 30 && finalTimes.push({ field: `${endHour}:${30}`, name: `${endHour}:${30}`, width: 100 })

    return finalTimes
}