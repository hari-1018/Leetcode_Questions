var formatDate = function(date) 
{
    const months = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    }
    let [day, month, year] = date.split(" ");
    day = day.slice(0,-2);
    if(day.length===1){
        day = "0" + day;
    }
    return [year, months[month], day].join("-");
}
console.log(formatDate("20th Oct 2024"))