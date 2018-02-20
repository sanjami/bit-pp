//1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]


var duplicate = function(array) {
    var newArray = [];
    var k;
    for(var i=0, k=0 ; i < array.length; i++, k++){
        newArray[k] = array[i];
        k++;
        newArray[k] = array[i];
    } 
    return newArray;
}

console.log(duplicate([2,4,7,11,-2,1]));


var duplicate = function(array) {
    var newArray = [];
    var k;
    for(var i=0; i < array.length; i++){
        newArray.push(array[i]);
        newArray.push(array[i]);
    } 
    return newArray;
}

console.log(duplicate([2,4,7,11,-2,1]));


//2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var remove_duplicate = function(array){
    var newArray = [];

    for(var i=0; i< array.length; i++){
      if(newArray.indexOf(array[i]) === -1){
          newArray.push(array[i]);
      }
    }
    return newArray;
}

console.log(remove_duplicate([8,13,8,9,12,8,1,1,4,13]));

//3. Write a function that checks if a given array has even number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
 
var check_even = function(array) {

    for(var i=0; i<array.length; i++){
        if(array[i] % 2 == 0){
            return true;
        }
    }
}

console.log(check_even([1,2,9,2,1]));


//3.b. Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, 
// print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var count = function(array) {
    var middlePosition;
    var middleElement;
    var counter = 0;

    if(array.length % 2 == 0){
        return 'error';
        
    }

    middlePosition = parseInt(array.length / 2);
    middleElement = array[middlePosition];

    for(var i = 0; i < array.length; i++){
        if(middleElement > array[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(count([-1, 8.1,3,6,2.3,44,2.11,9]));



//4. Write a function that finds the smallest element of a given array. The function should return an object that contains the 
// smallest value and its last position in the array.

var find_smallest = function(array){
    var minimumPosition;
    var min = array[array.length - 1];
    var result = {};
    for(i = array.length-1; i>=0; i--) {
        if(array[i]<min){
            min = array[i];
            minimumPosition = i;
        }
    }
    result.minimum = min;
    result.position = minimumPosition;
    return result;
}

console.log(find_smallest([-1, 5, 9, 4, 2, 3, 4]));

//5a. Write a function that finds all the elements in a given array less than a given element. 

var less_element = function(array, number){

    if(array.indexOf(number) == -1){
        return 'error';
    }

    var newArray = [];
    var j = 0;

    for(var i=0; i < array.length; i++){
        if(array[i] < number){
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

console.log(less_element([2,5,7,9,10,24,15], 15));


//5b. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 

var starts_with = function(array){

    var newArray = [];
    var j =0;

    for(var i =0; i <array.length; i++){
        if(array[i].toLowerCase().startsWith('pro')){
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

console.log(starts_with(['Professional', 'table', 'keyboard']));



//5c. Write a function that expects an array and a callback function that filters out some of the elements. 
// Use functions defined in a) or b) to test it. 

//var 2
function starts_with(string, element) {
    if(string.toLowerCase().startsWith(element)){
      return true;  
    }
}

var filter = function (array, func){
    var newArray = [];
    var j = 0;
    for(i = 0; i < array.length; i++) {
        if( func(array[i], 'pro') == true){
            newArray[j] = array[i];
            j++;
        }  
    }
    return newArray;
}

console.log(filter(['Professional', 'table', 'keyboard'], starts_with));

// var 3

var starts_with = function(array){

    var newArray = [];
    var j =0;

    for(var i =0; i <array.length; i++){
        if(array[i].toLowerCase().startsWith('pro')){
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

function big(array, func) {
    return func(array, "pro");
}

console.log(big(['Professional', 'table', 'keyboard'], starts_with ));



//6a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.


function Products (name, price) {
    this.name = name;
    this.price = price;
}

var myProducts = [];

var myProduct1 = new Products('apple', 100);
myProducts.push(myProduct1);
var myProduct2 = new Products('milk', 80);
myProducts.push(myProduct2);
var myProduct3 = new Products('bananas', 150);
myProducts.push(myProduct3);

console.log(myProducts);

//6b. Write a function that calculates the total price of your shopping list. 

function price(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total = total + array[i].price;
    }
    return total;
}
console.log(price(myProducts));

//6c. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 

function averagePrice(array) {
    var average = 0;
    for (var i = 0; i < array.length; i++) {
        average = average + array[i].price;
    }
    return (average/i).toFixed(3);
}
console.log(averagePrice(myProducts));

//6d. Write a function that prints out the name of the most expensive product on your shopping list. Write it in uppercase. 

function Products (name, price) {
    this.name = name;
    this.price = price;
}

var myProducts = [];

var myProduct1 = new Products('apple', 100);
myProducts.push(myProduct1);
var myProduct2 = new Products('milk', 80);
myProducts.push(myProduct2);
var myProduct3 = new Products('bananas', 150);
myProducts.push(myProduct3);

function mostExpensive(array) {
    var maxPrice = array[0].price;
    var product = array[0].name;
    for(var i = 0; i < array.length; i++) {
        if(maxPrice < array[i].price) {
            maxPrice = array[i].price;
            product = array[i].name;
        }
    }
    return product.toUpperCase();   
}

console.log(mostExpensive(myProducts));


//7. a) Write a function that checks if a given string is written in all capitals.

function checkCapital(string) {

    if(string === string.toUpperCase()) {
        return true;
    }  
        return false;
    

}

console.log(checkCapital('CAaITAL'));

// different solution

function capitals(str) {
    var upStr = str.toUpperCase();
    if(str === upStr) {
        return 'all capitals';
    }
    return 'not all capitals'
}

console.log(capitals('SDFtHKIJN'));


//7b. Write a function that checks if a given string contains any digits.

function digit (str) {
    var arr = str.split("");
    var arrSorted = arr.sort();
    if(isNaN(parseInt(arrSorted[0]))){
        return 'no digits';
    }
    return 'contains digit'
   
}

console.log(digit("bhgghfff"));

// 7. c)   different solution

function checkDigits(string) {
    
    var xarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c' , 'd' , 'e' , 'f'];

    if(string.charAt(0) === '#') {
        if(string.length - 1 == 3 || string.length - 1 == 6 ) {
            for(var i = 1; i < string.length; i++) {
                if(xarray.indexOf(string[i]) == -1) {
                    return 'invalid color 1';
                } 
            }
            return 'valid color'
        }
        return 'invalid color 2'
    }
    return 'is not valid color 3';
}

console.log(checkDigits("#000"));


// 7. d) Write a function that checks if a given number belongs to the interval from 1900 to 2018. 

function checkInterval(string) {
    var number = parseInt(string);
    if(number >= 1900 && number <= 2018) {
        return true;
    }
    return false;
}
console.log(checkInterval("2024"));


// 7. e) Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing 
//the functions from a) to d).

function checkCapital(string) {
    if(string === string.toUpperCase()) {
        return true;
    }  
        return false;
}

function digit (string) {
    var arr = string.split("");
    var arrSorted = arr.sort();
    if(isNaN(parseInt(arrSorted[0]))){
        return 'no digits';
    }
    return 'contains digit';   
}

function checkDigits(string) {
    
    var xarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c' , 'd' , 'e' , 'f'];

    if(string.charAt(0) === '#') {
        if(string.length - 1 == 3 || string.length - 1 == 6 ) {
            for(var i = 1; i < string.length; i++) {
                if(xarray.indexOf(string[i]) == -1) {
                    return 'invalid color 1';
                } 
            }
            return 'valid color'
        }
        return 'invalid color 2'
    }
    return 'is not valid color 3';
}

function checkInterval(string) {
    var number = parseInt(string);
    if(number >= 1900 && number <= 2018) {
        return true;
    }
    return false;
}

function Products (name, price) {
    this.name = name;
    this.price = price;
}
function Validator (strVal, passVal, colVal, yearVal, string) {
    this.stringValidator = strVal(string),
    this.passwordValidator = passVal(string),
    this.colorValidator = colVal(string),
    this.yearValidator = yearVal(string)
}
 var validator = new Validator(checkCapital, digit, checkDigits, checkInterval, '#FFF123');
 console.log(validator);


// 8. Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days



var currentDay = new Date();
currentDay.getTime();

var birthDay = Date.parse('2018 10 03');

var daysToBirth = birthDay - currentDay;
daysToBirth / 1000 / 60 / 60 / 24;
console.log(Math.floor(daysToBirth / 1000 / 60 / 60 / 24));


// 9. Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 8 seconds


var startTime = Date.parse('20 Feb 2018 8:22:13 GMT');
var finishTime = Date.parse('20 Feb 2018 11:43:22 GMT');

var tripTimeS = (finishTime - startTime)/1000;

var s = tripTimeS % 60;
var tm = (tripTimeS - s)/60;
var m = tm % 60;
var h = (tm-m)/60;

console.log(h + ":" + m + ":" + s);


// 10.   
// Write a constructor function that creates points in the space. Each point in the space has its own x, y, and z coordinate. For example, (3, 5, 1) can the point in the space.
// Write a function that calculates the distance between to points in the space. 


function CreatePoint( x, y, z) {

    this.x = x,
    this.y = y,
    this.z = z
}

var point1 = new CreatePoint(3, 5, 1);
var point2 = new CreatePoint(4, 2, 8);

var x1 = point1.x;
var x2 = point2.x;

var y1 = point1.y;
var y2 = point2.y;

var z1 = point1.z;
var z2 = point2.z;

var distance = Math.sqrt((Math.pow(Math.abs(x2 - x1), 2)) + (Math.pow(Math.abs(y2 - y1), 2)) + (Math.pow(Math.abs(z2 - z1), 2)));

console.log(distance);




// 11.a) Write a function that generates a random integer value between 5 and 20.
 

var generatenumber = Math.round(((20 - 5) * Math.random()) + 5);

console.log(generatenumber);

// Write a function that generates a random integer value between 50 and 100. 


var generatenumber = function() {
    var number = Math.round(((100 - 50) * Math.random()) + 50);
    return number;
};

console.log(generatenumber());


// Write a function which expects a number and a callback factory function and returns an array of numbers produced by the factory function.  

function factory(n, f) {

    var array = [];
    for( var i = 0; i < n; i++) {
        array.push(f());
    }
    return array;
}

console.log(factory(5, generatenumber));



