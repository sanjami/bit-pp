// Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to pull changes done earlier first and push the new repository to remote when done with all the work at the end.

/*Write a function to count vowels in a provided string.

   function vowelCount(inputString) {
       var vowelList = 'aeiouAEIOU';
       var vowelCount = 0;

       for (var x = 0; x < inputString.length; x++) {
           if (vowelList.indexOf(inputString[x]) !== -1) {
               vowelCount += 1;
           }

       }
       return vowelCount;
   }

   console.log(vowelCount("The quick brown fox"));
*/

var vowelCount = function (inputString) {
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;

    for (var x = 0; x < inputString.length; x++) {
        if (vowelList.indexOf(inputString[x]) !== -1) {
            vowelCount += 1;
        }

    }
    return vowelCount;
}

console.log(vowelCount("The quick brown fox"));


/*Write a function that combines two arrays by alternatingly taking elements.

[a,b,c], [1,2,3] -> [a,1,b,2,c,3]
*/

var combine = function (a, b) {
    var c = [];
    var i;
    var k = 0;
    var j;
    for (i = 0, j = 0; i < a.length || j < b.length; i++ , j++) {
        c[k] = a[i];
        k++;
        c[k] = b[j];
        k++
    }
    return c;
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3]));



/*Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

var rotate = function (a, k) {
    var b = [];
    var i;
    var j = 0;
    for (i = k; i < a.length; i++) {
        b[j] = a[i];
        j++;
    }
    for (i = 0; i < k; i++) {
        b[j] = a[i];
        j++;
    }
    return b;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 2));



/* Write a function that takes a number and returns array of its digits. */

var arrayOfDigits = function (a) {
    var b = '';
    b += a;
    var c = [];
    var i;
    for (i = 0; i < b.length; i++) {
        c[i] = parseInt(b[i]);
    }
    return c;
}

console.log(arrayOfDigits(2345));


// Write a program that prints a multiplication table for numbers up to 12.

var tableOfMultiplication = function (n) {
    var a = '';
    var b;
    var i;
    var j;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            a += i * j + '  ';
        }
        a += '\n';
    }
    return a;
}

console.log(tableOfMultiplication(12));

// Write a function to input temperature in Centigrade and convert to Fahrenheit.

var temperature = function (t) {
    var fTemperature = t * 9 / 5 + 32;
    return fTemperature;
}

console.log(temperature(-50));


// Write a function to find the maximum element in array of numbers.Filter out all non - number elements.

function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
            delete arr[i]
        } else {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}

console.log(findMax([1, 7, -8, 'a', NaN, undefined, 5]));


//Write a function to find the maximum and minimum elements.Function returns an array.

var minAndMax = function (a) {
    var min = a[0];
    var max = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
        if (a[i] > max) {
            max = a[i];
        }
    }
    return [min, max];
}

console.log(minAndMax([1, 3, 5, 7, -7, 8, 45]));


// Write a function to find the median element of array.

var sortArr = function (arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    var med;
    if (arr.length % 2 == 0) {
        med = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        med = arr[parseInt(arr.length / 2)];
    }
    return med;
}

console.log(sortArr([1, 2, 8, 10, 47, -8, 4, 5, 6, 7]));


//Write a function to find the element that occurs most frequently.

/*
var br = [1, 3, 7, 3];
var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for (i = 0; i < br.length; i++) {
    result[br[i]]++;
}
console.log(result);
*/


var frequent = function (arr) {
    var counter = 1;
    var result = [];
    var i;
    var j;
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    for (i = 0; i < arr.length; i++){
        for (var j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]){
                counter++              
            }            
        }
        result[i] = counter;
        counter = 1;
    }
         return result;
    }

 console.log(frequent([1, 5, 1, 1, 7, 8, 7, 5]));
 


/*Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.If number of elements is even, return just the first and the last.In other cases, input array should be returned.
*/

var elementOfArray = function (arr) {
    var elements;
    if (arr.length % 2 != 0) {
        elements = arr[0] + ',' + arr[parseInt(arr.length / 2)] + ',' + arr[arr.length - 1];
    } else if (arr.length % 2 == 0) {
        elements = arr[0] + ',' + arr[arr.length - 1];
    } else elements = arr;
    return elements;
}

console.log(elementOfArray([4, 2, -5, 1, 7, 9, 10]));



/*Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters.
*/

var average = function () {
    console.log(arguments);
    var sum = 0;
    var aver;
    var i;
    for (i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    aver = sum / arguments.length;
    return aver;
}

console.log(average(1, 7, 8, 2));


// Write a function to find all the numbers greater than the average.

var average = function (arr) {
    var sum = 0;
    var aver;
    var i;
    var j = 0;
    var b = [];
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    aver = sum / arr.length;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > aver) {
            b[j] = arr[i];
            j++;
        }
    }
    return b;
}

console.log(average([1, 6, 8, 7, 1, 5, 8]));


/*The body mass index(BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters).Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/
var bmi = function (weight, height) {
    var index;
    var category;
    index = weight / (height * height);
    console.log(index);
    if (index < 15) {
        category = "Starvation;"
    } else if (index < 17.5) {
        category = "Anorexic";
    } else if (index < 18.5) {
        category = "Underweight";
    } else if (18.5 <= index && index < 25) {
        category = "Ideal";
    } else if (25 <= index && index < 30) {
        category = "Overweight";
    } else if (30 <= index && index < 40) {
        category = "Obese";
    } else if (index >= 40) {
        category = "Morbidly";
    }
    return category;
}
console.log(bmi(76, 1.63));



/*Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a *
* frame *
*********
*/

var print = function (arr) {
    var maxStringLength = 0;
    var space = "";
    var stringCounter;
    var star = "";
    for (var n = 0; n < arr.length; n++) {
        if (maxStringLength < arr[n].length) {
            maxStringLength = arr[n].length;
        }
    }
    for (var k = 0; k < maxStringLength + 2; k++) {
        star = star + '*';
    }
    var result = "";
    var row;
    for (i = 0; i < arr.length; i++) {
        stringCounter = arr[i].length;
        space = "";
        for (j = 0; j < (maxStringLength - stringCounter); j++) {
            space = space + " ";
        }

        row = "*" + arr[i] + space + "*";
        result = result + row + '\n';
    }
    return star + '\n' + result + star;
}

console.log(print([" ghgjhgjh ", " hbb ", " njnjnjj ", " 01kg ", " bla "]));
