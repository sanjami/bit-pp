//1. Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;


function convert(x) {
    var n = new Number(x);
    var oct = n.toString(8);
    var hex = n.toString(16);
    var bin = n.toString(2);
    return oct + ' ' + hex + ' ' + bin ;   
}

console.log(convert(25));


//2. Write a JavaScript function that reverses a number.


function reverseNumber(x) {
    var str = x.toString();
    var arr = str.split('');
    var rv = arr.reverse();
    var st = rv.join('');
    return st;
}

console.log(reverseNumber(985746));



//3. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.


function pass(str) {

    var arr = str.split('');
    var s = arr.sort();
    var final = s.join('');
    return final;
}

console.log(pass('urhtfoln'));


//4. Write a function to alphabetize words of a given string. 
// Alphabetizing a string means rearranging the letters so they are sorted from A to Z.


function rearranging(str) {
    var arr;
    var arrSort = [];
    var newStr;
    arr = str.split(" ");
    for(var i = 0; i<arr.length; i++) {
        arrSort[i]=arr[i].sort();
    }
   newStr= arrSort.join();
   return newStr;
}

console.log(rearranging("my random string"));


//5. Write a function to split a string and convert it into an array of words.


function convertString(str) {
    var arr = str.split(' ');
    return arr;
}

console.log(convertString('my random string'));


//6. Write a function to convert a string to its abbreviated form.


function makeAbbrevat(str) {
    var abbr = str.substr(0, 5);
    return abbr;
}

console.log(makeAbbrevat('somethimes'));


//7. Write a function that can pad (left, right) a string to get to a determined length.



//8. Write a function to capitalize the first letter of a string.
 
function firstCapital(str) {
     var firstLetter = str.charAt(0).toUpperCase();
     return firstLetter.concat(str.substring(1));
}

console.log(firstCapital('beograd'));

//9. Write a function to hide email addresses to protect them from unauthorized users.
  
function hideEmail(email) {
    var position = email.indexOf('@');
    var firstPart = email.substring(0, position-4);
    var restOfEmail = email.substring(position, email.length);
    newEmail = firstPart.concat('...').concat(restOfEmail);
    return newEmail;
}

console.log(hideEmail('sanjam23@gmail.com'));

//10. Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';


 

