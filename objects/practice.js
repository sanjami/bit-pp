// mix elements of array randomly

var array = [2,3,1,7,8];

var mix = function(arr) {
    var newArr = [];
    // iskorisceni indexi iz niza arr
    var iarr = [];  

    for(var j =0; j<arr.length; ){
        var i = Math.floor(arr.length * Math.random());
        if(iarr.indexOf(i) != -1) {
            continue;
        } else {
            iarr.push(i);
            newArr[j] = arr[i];
            j++;
        } 
    }
return newArr;

}

console.log(mix(array));