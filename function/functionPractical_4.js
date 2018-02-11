/*1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
*/

function isInArray (e, a) {
    for (i = 0; i < a.length; i++) {
        if (a[i] == e) {
            return 'yes'
        }
    }
    return -1;
}

console.log(isInArray(2, [5, -4, 2, 3, 7]));


/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/


function multiple (arr) {
    for (i = 0; i < arr.length; i++ ) {
        if(arr[i] > 0) {
            arr[i]= arr[i]*2;
        }
    }
    return arr;
}

console.log(multiple([-3, 11, 5, 3.4, -8]));

/* 3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function printMinimum (a) {
    var position;
    var min = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            position = i;
        }
    }
    var result = 'Minimum is ' + a[position] + ' and position is ' + position; 
    return result;
}

console.log(printMinimum([4, 2, 2, -1, 6]));



/* 4. Write a program that finds the second largest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function minimum(arr) {
    var m = arr[0];
    var position = 0;
    for (i =0; i < arr.length; i++) {
        if (m > arr[i]) {
            m = arr[i];
            position = i;
        }
    }
    delete arr[position];
    var m2 = arr[0];
    for (i = 0; i < arr.length; i++) {
        if ( m2 > arr[i]) {
            m2 = arr[i];
        }
    } return m2;
}
console.log(minimum([4, 2, 2, -1, 6]));


/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumOfPositive (a) {
    var sum = 0;
    for (i = 0; i < a.length; i++){
        if(a[i] > 0) {
            sum += a[i];
        }
    }
    return sum;
}

console.log(sumOfPositive([3, 11, -5, -3, 2]));



/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/

function symmetric(arr) {
    var n = arr.length;
    var counter = 0;
for ( i = 0; i < parseInt(n/2); i++ ) {
        if (arr[i] == arr[n-1-i]) {
            counter += 1;
        }
    }
    if ( counter == parseInt(n/2)) {
        return "Array is symmetric";
    }
    else {
        return "Array is not symetric";
    }
}

console.log(symmetric([2, 3, 4, -2, -2, 4, 3, 2]));

/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function combination (a, b) {

    var i;
    var j;
    
    var c = [];
    var k = 0;
    // for (i = 0; i < a.length ; i++){
    //     c[k] = a[i];
    //     k++;
    //     c[k] = b[i];
    //     k++;
    // }
    //drugi nacin
    
    for ( i = 0, j = 0;  i< a.length && j< b.length; i++, j++){
        c[k] = a[i];
        k++;
        c[k] = b[j];
        k++;
    }
    return c;
}

console.log(combination ( [3, 8, 7], [6, 4, 13] ));


/* 8. Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function addition(a, b) {

    var i;
    var j;
    var k = 0;
    var c = [];

    for (i = 0; i < a.length; i++) {
        c[k] = a[i];
        k++;
    }

    for (j = 0; j < b.length; j++) {
        c[k] = b[j];
        k++;
    }
    return c;
}

console.log(addition([3, 8, 7], [6, 4, 13]));

//sortiraj elemente sortiranih nizova a i b od najmanjeg do najveceg

function merge(a, b) {
    var i;
    var j;
    var k;
    var c = [];
    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        } else {
            c[k] = b[j];
            j++;
        }
    }
    if (i == a.length) {
        for (; j < b.length; j++) {
            c[k] = b[j];
            k++;
        }
    } else {
        for (; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
    }
    return c;
}

var firstArr = [4, 6, 11, 18, 32];
var secondArr = [-1, 7, 13, 15];
var finalArr = merge(firstArr, secondArr);
console.log(finalArr);


/* 9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
*/

function deleting (e, a) {
    for (i = 0; i < a.length; i++) {
        if (a[i] == e) {
            position = i;
            delete a[i];
        }
    }
    return a;
}

console.log(deleting(2, [4, 6, 2, 8, 2, 2]));