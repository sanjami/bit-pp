
//2


function multiple (arr) {
    for (i = 0; i < arr.length; i++ ) {
        if(arr[i] > 0) {
            arr[i]= arr[i]*2;
        }
    }
    return arr;
}

console.log(multiple([-3, 11, 5, 3.4, -8]));

//4

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

// zadatak 6

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