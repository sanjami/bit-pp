// 1.Write a function that capitalizes the first letter of each string argument it receives.  
// Function arguments: ‘hello’, ‘there’, ‘ES’, 6
// Output: ‘Hello’, ‘There’, ‘ES’;


let capitalize = (...args) => {
    let result = '';
    args.forEach((element, index) => {
        if (typeof element == 'string') {
            let letter = element[0].toUpperCase();
            let rest = element.substring(1);
            result += ` ${letter}${rest}`;
        }
    })
    return result;
};
console.log(capitalize('hello', 'there', 'ES', 6));

// 2.Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120;
// 	Output: 24;

let calculateTax = (x) => {
    const t = 0.2;
    let y = x / (1 + t);
    return y * t;
};

console.log(calculateTax(120));


// 3.Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1];


let increaseArray = (array, n = 1) => {
    let newArray = array.map((element) => element + n);
    return newArray;
};

console.log(increaseArray([4, 6, 11, -9, 2.1], 2));



// 4.Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3];
// 	Output: [6, 0]


let fileterElements = (array) => {
    let newarr = array.filter((element) => element % 2 == 0);
return newarr;
}
console.log(fileterElements([6, 11, 9, 0, 3]));


// 5.Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: [‘compiler’, ‘transpiler’, ’babel.js’, ‘JS standard’, ‘linter‘]
// 	Output: [‘babel.js, ‘JS standard’]


let filterStrings = (array) => {
    let newArray = array.filter((element) => element.includes('JS') || element.includes('js'));
    return newArray;
}

console.log(filterStrings(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));


// 6.Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

let filterInteger = (array) => {

    let newArray = array.filter((element) => Number.isInteger(element));
    return newArray;
}
console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));



// 7.Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, ‘abc’, 45, 28, 553 
// 	Output: 45, 553


let filterInteger = (...args) => {
let result = '';
    args.forEach((element) => {
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

let returnIndex = (array) => {
    let result = '';
    array.forEach((element, index) => {

        if(element > 10) {
             result += `${index}, `;
        }
    })
    return result;
}

console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]));





// 9. a.Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// b.Write a function that prints out the names of persons older than 25. 



let arrayOfPerson = [{name: 'pera', age: 26},{name: 'zika', age: 26}];

let printOlderPersons = (arrayOfPerson) => {

    let result ='';
    arrayOfPerson.forEach((element) => {

        if(element.age > 25) {
            result += `${element.name} `;
        } 
    })
   return result;
}

console.log(printOlderPersons(arrayOfPerson));

// 9. c.Write a function that check if there is a person older than 40.

let arrayOfPerson = [{name: 'pera', age: 26},{name: 'zika', age: 40}];

let printOlderPersons = (arrayOfPerson) => {

 
   let result = arrayOfPerson.some((element) => element.age > 40);
    if(result == true) {
        return 'There are person older than 40';
    } else {
        return 'There are not anyone who are older than 40';
    }
}



console.log(printOlderPersons(arrayOfPerson));


// d.Write a function that checks if all persons are older than 20.   


let arrayOfPerson = [{name: 'pera', age: 26},{name: 'zika', age: 19}];

let printOlderPersons = (arrayOfPerson) => {

 
   let result = arrayOfPerson.every((element) => element.age > 20);
    if(result == true) {
        return 'All persons are older than 20';
    } else {
        return 'Not all persons are older than 20';
    }
}



console.log(printOlderPersons(arrayOfPerson));





// 10.Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

// 	Input: [3, -12, 4, 11]
// 	Output: no

let checkPositiveValue = (array) => {
    
    let result = array.every((element) => element > 0);
    if(result == true) {
        return 'yes';
    }
   return 'no';
}

console.log(checkPositiveValue([3, 11, 9, 5, 6]));



// 11.Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

let calculateProduct = (array) => {

   let result = array.reduce((acumulator, element) => acumulator*element);
    return result;
}

console.log(calculateProduct([2, 8, 3]));


// 12.Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8

let calculateMax = (array) => {

   let result = array.reduce((acumulator, element) => {
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