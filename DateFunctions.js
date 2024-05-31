//Below function will accept dateString as dd/mm/yyyy
function getFormattedDate(dateString){
    if(dateString === null || dateString === ""){
        return "";
    }
    var D = new Date(dateString);
    var m = D.getMonth() + 1;
    var d = D.getDate();
    var y = D.getFullYear();
    return `${y}-${m}-${d}`;
}

//Below function will check compare difference of months between two dates
//Here months parameter is the number of months to check
function performMonthsValidation(months, fromDate, toDate){
    var fromDateObj = new Date(fromDate);
    var toDateObj = new Date(toDate);

    var monthsDiff = (toDateObj.getFullYear() - fromDateObj.getFullYear)*12 + (toDateObj.getMonth() - fromDateObj.getMonth());

    if(monthsDiff > months){
        return false;
    }
    return true;
}

//Below function will accept date in yyyy-mm-dd format
function isFutureDate(date){
    var inputDate = new Date(date).valueOf();
    var currentDate = new Date().valueOf();
    console.log(inputDate, currentDate);
    return (currentDate >= inputDate);
}
