// 1.Write a function that capitalizes the first letter of each string argument it receives.  
// Function arguments: ‘hello’, ‘there’, ‘ES’, 6
// Output: ‘Hello’, ‘There’, ‘ES’


function capitalize(...args) {
    let result = '';
    args.forEach(function (element, index) {
        if (typeof element == 'string') {
            let letter = element[0].toUpperCase();
            let rest = element.substring(1);
            result += ` ${letter}${rest}`;
        }
    })
    return result;
}
console.log(capitalize('hello', 'there', 'ES', 6));

// 2.Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24

function calculateTax(x) {
    const t = 0.2;
    let y = x / (1 + t);
    return y * t;
}

console.log(calculateTax(120));


// 3.Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]


function increaseArray(array, n = 1) {
    let newArray = array.map(function(element) {
        return element + n;
    })
    return newArray;
}

console.log(increaseArray([4, 6, 11, -9, 2.1], 2));




// 4.Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]


function fileterElements(array) {
    let newarr = array.filter(function(element){
      return  element % 2 == 0;
    })
return newarr;
}
console.log(fileterElements([6, 11, 9, 0, 3]));


// 5.Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: [‘compiler’, ‘transpiler’, ’babel.js’, ‘JS standard’, ‘linter‘]
// 	Output: [‘babel.js, ‘JS standard’]


function filterStrings(array) {
    let newArray = array.filter(function(element){
      return  element.includes('JS') || element.includes('js'); 
    })
    return newArray;
}

console.log(filterStrings(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));


// 6.Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

function filterInteger(array) {

    let newArray = array.filter(function(element){
        return Number.isInteger(element);
    })
    return newArray;
}
console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));



// 7.Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, ‘abc’, 45, 28, 553 
// 	Output: 45, 553


function filterInteger(...args){
let result = '';
    args.forEach(function(element){
        if(typeof element == 'number') {
            if(Number.isInteger(element)){
               let checkInteger = element.toString();
               if(checkInteger.includes('5')){
                result += `${checkInteger} `;
               }
            }
        }
        
    })
return result;
}

console.log(filterInteger(23, 11.5, 9, 'abc', 45, 28, 553));



// 8.Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5

function returnIndex(array) {
    let result = '';
    array.forEach(function(element, index){

        if(element > 10) {
             result += `${index}, `;
        }
    })
    return result;
}

console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]));





// 9. a.Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// b.Write a function that prints out the names of persons older than 25. 
// c.Write a function that check if there is a person older than 40.
// d.Write a function that checks if all persons are older than 20.   

let arrayOfPerson 



// 10.Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

// 	Input: [3, -12, 4, 11]
// 	Output: no

function checkPositiveValue(array){
    
    let result = array.every(function(element){
        return  Math.sign(element) == 1;

    })
    if(result == true) {
        return 'yes';
    }
   return 'no';
}

console.log(checkPositiveValue([3, 11, 9, 5, 6]));




// 11.Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

function calculateProduct(array){

   let result = array.reduce(function(acumulator, element){
       return acumulator*element;
    })
    return result;
}

console.log(calculateProduct([2, 8, 3]));


// 12.Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8

function calculateMax(array){

   let result = array.reduce(function(acumulator, element){
        if(acumulator>element){
            return acumulator;
        }
        else{
            return element;
        }
    });
    return result;
}

console.log(calculateMax([2, 7, 3, 8, 5.4]));