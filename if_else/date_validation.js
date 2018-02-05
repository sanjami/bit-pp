
var day=29;
var month=2;
var year = 2008;

if (month>12 || month<1 ||  day<1 || day>31 ) {
    console.log("Not valid date");
} else {

var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
};

if (day <= monthLength[month-1] ){
    console.log("Date is valid");
} else {
    console.log("Not valid date");
}
};