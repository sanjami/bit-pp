

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

"use strict"

var arrToJoin = [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinToString(arr) {
    var newString = ""
    
    for(var i = 0; i < arr.length; i++) {
        if(isFinite(arr[i]) === false || arr[i] === undefined || arr[i] === null){
            continue;         
        } else {
            newString += arr[i]
        }

    }

    return newString
}

console.log(joinToString(arrToJoin));


//Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

"use strict"

var testArray = [NaN, 0, 15, false, -22, '', undefined, 47, null]

function removeFalsy(arr) {
    var newArray = []
    var newArrayIndex = -1
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i] === false) {
            continue;

        }

        newArrayIndex++
        newArray[newArrayIndex] = arr[i]

    }
    
    return newArray
}


console.log(removeFalsy(testArray));

// Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

"use strict"

function reverseNumber(num) {
    var numToString = num + ""
    var newString = ""
    for(var i = numToString.length-1; i >= 0; i--) {        
        newString += numToString[i]
    }
    var parseToNumber = parseFloat(newString)
    return parseToNumber
}

console.log(reverseNumber(12341231235));

// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

"use strict"

function fillArray(numberOfElements, element) {    
    var newArray = []
    if(element === undefined) {
        element = null
    }

    for(var i = 0; i < numberOfElements; i++) {
        newArray[i] = element
    }

    return newArray
}

console.log(fillArray(3));



// Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect 

"use strict"

function isPerfect(num) {
    var properDivisors = []
    var newArrayIndex = -1
    var result = 0    
    var isItPerfect = ""

    for(var i = 0; i < num; i++) {
        if(num % i === 0) {
            newArrayIndex++
            properDivisors[newArrayIndex] = i
            
        }
    }

    for(var j = 0; j < properDivisors.length; j++) {
        result += properDivisors[j]
    }

    if(result === num) {
        isItPerfect = "yes, it is perfect"
    } else {
        isItPerfect = "Nope, it is not"
    }

    return isItPerfect
    
}
console.log(isPerfect(8281));

// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

"use strict"

function findWord(str, word) {
    var wordCounter = 0;
    var wordContainer = ""
    var wordArray = []
    var wordArrayIndex = -1
    
    for(var i = 0; i < str.length; i++) {    
        wordContainer += str[i]
       if(str[i] ===  " " || i === str.length - 1) {
           wordArrayIndex++           
           wordArray[wordArrayIndex] = wordContainer;
           wordContainer = ""           
       }       
        
    }

    for( var j = 0; j < wordArray.length; j++){
        if(wordArray[j] === word || wordArray[j] === word + ", " || wordArray[j] === word + " ") {
            wordCounter++          
        }
    }

    return word + " was found " + wordCounter + " times" 
}

console.log(findWord('The quick fox brown fox', 'fox'));

// Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

"use strict"

function hideEmail(email) {
    var spreadOperator = "..."
    var hiddenEmail = ""
    var positionOfMonkey = 0

    for(var i = email.length; i >= 0; i--){
        if(email[i] === "@") {
            positionOfMonkey = i
        }
    }

    for(var j = 0; j < email.length; j++) {
        if(j < 7) {
            hiddenEmail += email[j]
        } else if(j === 7){
            hiddenEmail += spreadOperator
        } else if(j > 7 && j < positionOfMonkey) {
            continue
        } else if (j === positionOfMonkey) {
            hiddenEmail += "@"
        } else if (j > positionOfMonkey) {
            hiddenEmail += email[j]
        }
    }

    return hiddenEmail
}

console.log(hideEmail("myemailaddress@bgit.rs"));

