var a = 1;
var day;
switch (a) {
    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;

    case 7:
        day = 'Sunday';
        break;

    default:
        day = 'Input must be between 1 to 7';
}
console.log(day);

var a = 17;
var day;
switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = 'weekday';
        break;
    case 6:
    case 7:
        day = 'weekend';
        break;
    default:
        day = 'Input must be between 1 to 7';
}
console.log(day);

var a = 12;
var month;
switch (a) {
    case 1:
        month = 'January';
        break;
    case 2:
        month = 'February';
        break;
    case 3:
        month = 'Mart';
        break;
    case 4:
        month = 'April';
        break;
    case 5:
        month = 'May';
        break;
    case 6:
        month = 'Jun';
        break;
    case 7:
        month = 'July';
        break;
    case 8:
        month = 'August';
        break;

    case 9:
        month = 'September';
        break;

    case 10:
        month = 'October';
        break;

    case 11:
        month = 'November';
        break;

    case 12:
        month = 'December';
        break;

    default:
        month = 'Input must be between 1 to 12';
}
console.log(month);

var a = 13;
var season;
switch (a) {
    case 1:
    case 2:
        season = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        season = 'autumn';
        break;
    case 12:
        season = 'Winter';
        break;
    default:
        season = 'Input must be between 1 to 12';
}
console.log(season);

var grade = 'b';
switch (grade) {
    case 'a':
        console.log('good job')
        break;
    case 'b':
        console.log('Pretty good')
        break;
    case 'c':
        console.log('Passed')
        break;
    case 'd':
        console.log('Not so good')
        break;
    case 'f':
        console.log('Failed')

    default:
    console.log('unknown grade')
}

