// Write a functional expression that duplicates each element of a given array.
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


// Write a functional expression that removes all duplicates in a given array.
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

// Write a function that checks if a given array has even number of elements.
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


// Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, 
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



// Write a function that finds the smallest element of a given array. The function should return an object that contains the 
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

// Write a function that finds all the elements in a given array less than a given element. 

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


// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 

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



// Write a function that expects an array and a callback function that filters out some of the elements. 
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



// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.


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

// Write a function that calculates the total price of your shopping list. 

function price(array) {
    var total = array[0].price + array[1].price+ array[2].price;
    return total;
}
console.log(price(myProducts));

// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 

function averagePrice(array) {
    var average = (array[0].price + array[1].price+ array[2].price)/3;
    return average.toFixed(3);
}
console.log(averagePrice(myProducts));

// Write a function that prints out the name of the most expensive product on your shopping list. Write it in uppercase. 
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

function sortNumbers(a, b) {
    return a-b;
}

function mostExpensive(array) {
    var prices  = [];
    prices.push(array[0].price);
    prices.push(array[1].price);
    prices.push(array[2].price);
    console.log(prices);

    var sortArr = prices.sort(sortNumbers);
    console.log(sortArr);
    var maxPrice = sortArr[2];
    var index = array.indexOf(maxPrice);
    console.log(index);
    return array[index].name;

}
console.log(mostExpensive(myProducts));


// Write a function that checks if a given string is written in all capitals.

function capitals(str) {
    var upStr = str.toUpperCase();
    if(str === upStr) {
        return 'all capitals';
    }
    return 'not all capitals'
}

console.log(capitals('SDFtHKIJN'));


// Write a function that checks if a given string contains any digits.

function digit (str) {
    var arr = str.split("");
    var arrSorted = arr.sort();
    if(isNaN(parseInt(arrSorted[0]))){
        return 'no digits';
    }
    return 'contains digit'
   
}

console.log(digit("bhgghfff"));

// Write a function that checks if a given string is a valid hexadecimal color.

function isHex (str) {
    
}

// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 

function isInInterval (n) {
    if(n > 1900 && n < 2018) {
        return true;
    }
    return false;
}
console.log(isInInterval(1985));


// Write a function named validator that returns an object with properties //stringValidator, passwordValidator, 
// colorValidator, and yearValidator referencing the functions from a) to d).
