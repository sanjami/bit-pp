var str = 'abelgrade - paris';
var uppStr = str.toUpperCase();
var vocalArr = ['A', 'E', 'I', 'O', 'U', ' '];
var count = 0;
constArr = [];

for (i = 0; i < uppStr.length; i++) {


    if (vocalArr.indexOf(uppStr[i]) === -1) {
        if (count == 0) {
            constArr[0] = uppStr[i];
            count++
        } else if (count == 1) {
            if (uppStr[i] == '-') {
                count++;
            }
            constArr[count] = uppStr[i];
        } else if (count == 2) {
            constArr[count] = uppStr[i];
            count++;
        } else if (count == 3) {
            constArr[count] = uppStr[i];
        }
    }
}

result =constArr[0]+constArr[1] + ' - ' + constArr[2] + constArr[3];
console.log(result);