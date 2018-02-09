
// "#F3A811" u rgb

function converter(color) {
    var red = color[1] + color[2];
    var a = parseInt(red, 16); 

    var green = color[3] + color[4];
    var b = parseInt(green, 16);

    var blue = color[5] + color[6];
    var c = parseInt(blue, 16);

    var rgb = a, b, c;
}


console.log(converter('f3a811'));

// color :rgb(a, b, c);

