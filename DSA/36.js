//# Number of Days calculator


function calculateDaysBetweenDate(d1,d2){
    let date1 = new Date(d1)
    let date2 = new Date(d2)

    let diff = Math.abs(date2-date1)
    let toDate = diff/(24*60*60*1000)
    return toDate
}

console.log(calculateDaysBetweenDate("2024-06-14","2024-03-01"))