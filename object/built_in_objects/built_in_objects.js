// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

function convert(x) {
    var n = new Number(x);
    var oct = n.toString(8);
    var hex = n.toString(16);
    var bin = n.toString(2);
    return oct + ' ' + hex + ' ' + bin ;
    
    
}

console.log(convert(25));



// Write a JavaScript function that reverses a number.


function reverseNumber(x) {
    var n = new String(x); 
    var arr = [];

    for(var i=0; i < n.length; i++) {
        arr[i] = n[i];
    }

    var rv = arr.reverse();
    var st = rv.join('');
    return st;
}

console.log(reverseNumber(985746));



// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

function pass(str) {

    var arr = [];

    for(var i = 0; i< str.length; i++) {
        arr[i] = str[i];
    }
    
    var s = arr.sort();
    var final = s.join('');
    return final;
}

console.log(pass('urhtfoln'));




// Write a function to alphabetize words of a given string. 
// Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

function alpha(a) {

}

s = 'I am hero'

s.indexOf()



// Write a function to split a string and convert it into an array of words.



// Write a function to convert a string to its abbreviated form.



// Write a function that can pad (left, right) a string to get to a determined length.



// Write a function to capitalize the first letter of a string.
 

// Write a function to hide email addresses to protect them from unauthorized users.
  

// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';
 

