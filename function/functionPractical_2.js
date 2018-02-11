// Functions Practical 2

/* Zadatak 1 Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/

function isString(input) {
    if (typeof (input) == 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(isString('My random string'));
console.log(isString(12));


/* Zadatak 2
Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

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


/* Zadatak 3
Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/


function concate(n, string) {
    var result = '';
    for (i = 0; i < n; i++) {
        result = result + string;
    } return result;
}

console.log(concate(3, 'Ha'));

/* Zadatak 4
Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

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

/* Zadatak 5
Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

*/

function positionOfLetter(string, letter) {
    for (i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 's'));

/* Zadatak 6
Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
*/

function positionOfLetter(string, letter) {
    for (i = string.length; i > 0; i--) {
        if (letter == string[i]) {
            return i + 1;

        }
    }
    return -1;
}

console.log(positionOfLetter('vfdjkvfjdk', 's'));



/* Zadatak 7
Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
*/

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


/* Zadatak 8
Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

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


/* Zadatak 9
Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/

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


/* Zadatak 10
Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function getFirstPart(n, str) {
    var newStr = '';
    for (i = 0; i < n; i++) {
        newStr = newStr + str[i];
    }
    return newStr + '...'
}
console.log(getFirstPart(4, 'gdfhjrjjkkdj78'));


/* Zadatak 11
Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

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



/* Zadatak 12
Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
*/

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



/* zadatak 13
Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th

Hint: num % 100 >= 11 && num % 100 <= 13
*/

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

