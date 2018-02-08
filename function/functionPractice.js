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

        //zadatak 1 

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

        // zadatak 2

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


        // zadatak 3

        function digit(a) {
        if (typeof a === "number") {
        if (a > 99 && a < 1000) {
            return "its three digit number";
        } return "Is not three digit number";
        } return "Is not a number";
        }
        console.log(digit(2324));

        // zadatak 4


        function arithmetic(a, b, c, d) {
        var sum;
        if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
        sum = (a + b + c + d) / 4;
        return sum;
        } return "One or more values are not a number";
        }

        console.log(arithmetic(-1, "2", 3, 6));


        // zadatak 6

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

        // zadatak 9

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




        // zadatak 10
function countLetter (a, str) {
    var counter = 0;
    for(i = 0; i<str.length; i++) {
        if (a == str[i]) {
            counter++;
            
        }
    }
    return counter;
} 

console.log(countLetter('a', 'blablabla'));


