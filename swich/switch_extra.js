var city = "Nice";

switch(city) {
    case "Berlin":
    case "Munich":
    case "Hamburg":
    case "Frankfurt":
    case "Stuttgart":
    case "Dortmund":
    console.log(city + " is in Germany");
    break;
    case "Paris":
    case "Lyion":
    case "Nice":
    case "Lille":
    console.log(city + " is in France");
    break;
    case "Manchester":
    case "London":
    console.log(city + " is in Englang");
    break;
    case "Verona":
    case "Bologna":
    console.log(city + " is in italy");
    break;
    case "Belgrade":
    confirm.log(city + " is in Serbia");
    break;
    default:
    console.log("Please choose a different city");
}




var x = 10;
var y = 0;
var operation = "/";
var result;

switch (operation) {
    case "+":
    result = x+y;
    break;
    case "-":
    result = x-y;
    break;
    case "*":
    result = x*y;
    break;
    case "/":
    if(y !== 0) {
        result = x/y;
    } else {
        console.log("Number can't be 0");
    };
    break;
}
console.log(result);