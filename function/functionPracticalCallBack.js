
//  Funkcija ce se zvati generalnumber koja ocekuje neku funkciju f i generise small number-8, large-590, huge-23457;

function small() {
    return 8;
}

function large() {
    return 590;
}

function huge() {
    return 23457;
}

function generalnumber(j) {

    return j();
}

console.log(generalnumber(huge));


// Dat je niz i potrebna je funkcija koja kvadrira vrednost datog broja



function squareFunction(n) {

    return n * n;
}

function squareOfArray(f, a) {

    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = f(a[i]);
    }

    return b;
}
console.log(squareOfArray(squareFunction, [1, 2, 3, 4, 5]));


// Proveriti da li u passwordu ima cifra


function passwordValid() {
    return 'Password is valid';
}

function passwordError() {
    return 'Password is not valid';
}


function checkPassword(password, a, b) {

    for (var i = 0; i < password.length; i++) {
        var d = parseInt(password[i]);
        console.log(d);
        console.log(d!=NaN);
        if (d == NaN) {
            console.log(a());
            break;
        }
    }
}

checkPassword('abcde', passwordValid, passwordError);


// Na osnovu dva niza formirati treci koji sadrzi zbir elemenata prva dva niza
// Prilikom poziva f treba da bude funkcija koja racuna zbir dva broja.

function sum(a, b) { return a + b; }

function sum_of_array(arr1, arr2, f) {

    var e = [];
    for (var i = 0; i < arr1.length || i < arr2.length; i++) {
        e[i] = f(arr1[i], arr2[i]);
    }
    return e;
}

console.log(sum_of_array([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], sum));


// funkcija koja zamenjuje prvi i poslednji element



// napisati f - ju koja ocekuje kao argumente ime i ocekuje prezime a za nas vraca funkciju koja predlaze email adresu.


function nameAndSurname(name, surname) {

    return function () {
        console.log(name + '.' + surname + '@gmail.com');
    }
}

//var email = nameAndSurname('Pera', 'Peric');

//email();

nameAndSurname("pera", "peric")();





// u zadatoj niski zameniti svako slovo a zvezdicom * i ispisati rezultat i vratiti broj zamene

var star = (function (arr) {

    var b = '';
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'a') {
            counter++;
            b = b + '*';
        } else {
            b = b + arr[i];
        }

    }
    console.log(b);
    //  console.log(counter);
    return counter;

})('abrakadabra');


console.log(star);


// filter array izbaci deljive sa 5

function filterArray(arr, filter) {
    var filteredArr = [];

    for (var i = 0, j = 0; i < arr.length; i++) {
        if (filter(arr[i])) {
            filteredArr[j] = arr[i];
            j++;
        }
    }

    return filteredArr;
}

function filterFunc(element) {
    return (element % 5 === 0);
}

var ourArray = [23, 15, 6, 10, 30];
console.log(filterArray(ourArray, function (elem) {
    return !(elem % 15);
}));

var newarr = ourArray.filter(function (element) {
    return element % 2 != 0;
})

console.log(newarr);