// Functions Practical
// zbir cifara nekog broja

function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;

    if (typeof n != "number") {
        return -1;
    }
    if (n < 0) {
        n = -n;
    }

    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        sum = sum + lastDigit;
    }
    return sum;
}

console.log(sumOfDigits(986));




// zbir prve i poslednje cifre nekog broja.

function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;
    var firstDigit = 0;

    if (typeof n != "number") {
        return -1;
    }
    if (n < 0) {
        n = -n;
    }

    lastDigit = n % 10;
    n = (n - lastDigit) / 10;

    while (n > 0) {
        firstDigit = n % 10;
        n = (n - firstDigit) / 10;
    }
    sum = (firstDigit + lastDigit);
    return sum;
}

console.log(sumOfDigits(5));


//zadatak 1 Write a function that calculates the maximum of two given numbers. 


function max(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        return "Nisi uneo broj";
    }
    if (a > b) {
        return a;
    } else
        return b;
}
console.log(max(2, -5));


// zadatak 2 Write a function that checks if a given number is odd.


function odd(a) {
    if (typeof a === "number") {
        if (a >= 0) {
            if (a % 2 == 1) {
                return "Number is odd";
            } return "Number is not odd";
        } return "number is negative";
    } return "is not a number";
}

console.log(odd(0));


// zadatak 3 Write a function that checks if a given number is a three digit long number


function digit(a) {
    if (typeof a === "number") {
        if (a > 99 && a < 1000) {
            return "its three digit number";
        } return "Is not three digit number";
    } return "Is not a number";
}
console.log(digit(2324));


// zadatak 4 Write a function that calculates an arithmetic mean of four numbers.


function arithmetic(a, b, c, d) {
    var sum;
    if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
        sum = (a + b + c + d) / 4;
        return sum;
    } return "One or more values are not a number";
}

console.log(arithmetic(-1, "2", 3, 6));


/* zadatak 5
Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
*****
*    *
*    *
*    *
*****
*/


function drowSquare (n) {
    for (r = 0; r < n; r++) {
        if (r == 0 || r == n - 1) {
            var row = '';
            for (i = 0; i < n; i++) {
                row = row + '*';
            }
            console.log(row);
        } else {
            var rows = '';
            for (i = 0; i < n - 2; i++) {
                rows = rows + ' ';
            }
            rows = '*' + rows + '*';
            console.log(rows);
        }
    }
}

drowSquare(4);


/* zadatak 6
Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
* * * * *
* * *
* * * * * * *
*/


function stars(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        if (a > 0 && b > 0 && c > 0) {
            var string;
            var string1 = "";
            for (i = 0; i < a; i++) {
                string1 += "*";
            }
            var string2 = "";
            for (i = 0; i < b; i++) {
                string2 += "*";
            }
            var string3 = "";
            for (i = 0; i < c; i++) {
                string3 += "*";
            }
            string = string1 + '\n' + string2 + '\n' + string3;
            return string;
        } return "Number is negative";

    } return "One or more values are not a number";
}
console.log(stars(3, -7, 5.1));


// zadatak 7 Write a function that calculates a number of digits of a given number. 


function numberOfDigit(n) {
    var digit = 0;
    if (typeof n != "number") {
        return -1;
    }
    if (n < 0) {
        n = -n;
    }

    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        digit = digit + 1;
    }
    return digit;
}

console.log(numberOfDigit('-248h9'));


// zadatak 8 Write a function that calculates a number of appearances of a given number in a given array.


function numberOfElements(n, arr) {
    var counter = 0;
    for (i = 0; i < arr.length; i++) {
        if (n == arr[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(numberOfElements(2, [1, 2, 6, -3, 2, 2, 8]));


// zadatak 9 Write a function that calculates the sum of odd elements of a given array. 


function sumOfArray(n) {
    var sum = 0;
    for (i = 0; i < n.length; i++) {
        if (typeof n[i] === "number") {
            if (n[i] >= 0) {
                if (n[i] % 2 == 1) {
                    sum = sum + n[i];
                }
            }
        }
    }

    return sum;
}

console.log(sumOfArray([1, 53, '7', -8, -11]));


// zadatak 10 Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A.


function countLetter(a, str) {
    var A = 'A';
    var counter = 0;
    for (i = 0; i < str.length; i++) {
        if (a == str[i] || A == str[i]) {
            counter++;

        }
    }
    return counter;
}

console.log(countLetter('a', 'blAblAbl'));


// zadatak 11 Write a function that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 


function concat(str, n) {
    var result = '';
    for (i = 0; i < n; i++) {
        result = result + str;
    }
    return result;
}

console.log(concat('abc', 4));
 