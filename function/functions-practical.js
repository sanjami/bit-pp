//sortiraj elemente sortiranih nizova a i b od najveceg do najmanjeg

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

//nadovezi jedan niz na drugi - Zadatak 8

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

//kombinuj jedan po jedan iz svakog niza  - Zadatak 7

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