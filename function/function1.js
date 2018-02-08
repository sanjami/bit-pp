// Functions Practical 2

// Zadatak 1

function isString(input) {
    if (typeof (input) == 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(isString('My random string'));
console.log(isString(12));


// Zadatak 2

function isBlank(input) {
    if (input === " ") {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank('My random string'));
console.log(isBlank(12));
console.log(isBlank(" "));
console.log(isBlank(false));


// Zadatak 3


function concate(n, string) {
    var result = '';
    for (i = 0; i < n; i++) {
        result = result + string;
    } return result;
}

console.log(concate(3, 'Ha'));

// Zadatak 4


function countLetter(string, letter) {
    var counter = 0;
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countLetter("blablabla", "b"));

// Zadatak 5


function positionOfLetter(string, letter) {
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 's'));

// Zadatak 6


function positionOfLetter(string, letter) {
    for (i = string.length; i > 0; i--) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 's'));



// Zadatak 7


function convertStringIntoArray(string) {
    var array = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            array[i] = null;
        } else {
            array[i] = string[i];
        }
    }
    return array;
}

console.log(convertStringIntoArray('abc'));


// Zadatak 8


function isNumberPrime(n) {
    if (n > 1) {
        for (i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                return 'Number is not prime';
                break;
            }
        }
    } else {
        return 'Number is not prime';
    }
    return 'Number is prime'
}

console.log(isNumberPrime(6));


// Zadatak 9


function replaceSpaces(string, separator) {
    if (separator == undefined) {
        separator = '-'
    }
    string1 = '';

    for (i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            string1 += separator;
        } else {
            string1 += string[i]
        }

    }
    return string1;
}

console.log(replaceSpaces('Sanja i Branka'));


// Zadatak 10

function getFirstPart(n, str) {
    var newStr = '';
    for (i = 0; i < n; i++) {
        newStr = newStr + str[i];
    }
    return newStr + '...'
}
console.log(getFirstPart(4, 'gdfhjrjjkkdj78'));


// Zadatak 11


function convertArrayOfStringtoArrayOfNumber(arrayOfString) {
    var arrayOfNumber = [];
    var position = 0;
    for (i = 0; i < arrayOfString.length; i++) {
        if (typeof (parseInt(arrayOfString[i])) == 'number' && !isNaN((parseInt(arrayOfString[i])))) {

            arrayOfNumber[position] = parseInt(arrayOfString[i]);
            position++;
        }
    }
    return arrayOfNumber;
}

console.log(convertArrayOfStringtoArrayOfNumber(['2', 'a', undefined, '4', 192, Infinity, '1e+3']));



// Zadatak 12


function retirement(yearOfBirth, currentYear, gender) {

    var yearsLeft;
    var years = currentYear - yearOfBirth;
    if (gender == 'male') {
        if (years < 65) {
            yearsLeft = 65 - years;
            return yearsLeft;
        } else {
            return 'You are already retired'

        }
    }
    if (gender == 'female') {
        if (years < 60) {
            yearsLeft = 60 - years;
            return yearsLeft;
        } else {
            return 'You are already retired'

        }
    }

}

console.log(retirement(1971, 2018, 'female'));



// zadatak 13

function humanizeNumber(n) {
    var humanised = '';
    if (n % 100 >= 11 && n % 100 <= 13) {
        humanised = n + 'th'
    } else if (n % 10 == 1) {
        humanised = n + 'st';
    } else if (n % 10 == 2) {
        humanised = n + 'nd';
    } else if (n % 10 == 3) {
        humanised = n + 'rd';
    } else {
        humanised = n + 'th';
    }
    return humanised;
}

console.log(humanizeNumber(240));

