function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars
}

function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars
}

var webapp1 = new WebApp("myapp", "www.http://myapp.com", ["javaScript",  "jQuery"], "cc", 5 );
// console.log(webapp1);

var mobapp1 = new MobileApp("myMapp", ["android", "mac"], "bb", 6);
// console.log(mobapp1);

WebApp.prototype.getData = function() {
    var allData = this.name + " " +  this.url +  " " + this.technologies + " " + this.licence + " " + this.stars;
    console.log(allData);
}

WebApp.prototype.reactBased = function() {

    var ind;

    ind = this.technologies.forEach(function(element) {
        if(element.toLowerCase() === "react") {
            console.log("Application is react based");
            return true;
        }
    });
    if(ind == undefined){
        console.log("Application is not react based");
    }
}

// console.log(webapp1.reactBased());

MobileApp.prototype.getData = function() {
    var allData = this.name + " " +  this.platforms +  " "  + this.licence + " " + this.stars;
    console.log(allData);
}

MobileApp.prototype.forAndroid = function() {
    for(var i = 0; i < this.platforms.length; i++) {
        if(this.platforms[i].toLowerCase() === "android") {
           return console.log("Application is developed for Android");
        } 
    }
    return console.log("Application is not developed for Android");
}

// console.log(mobapp1.forAndroid());


var objectShare = {

    isCCLicence: function(){
        if(this.licence.toUpperCase() == 'CC') {
            console.log('Licence of application is CC');
        } else {
            console.log('Licence of application is not CC');
        }
    },
    like: function(){
        this.stars ++;
    },
    showStars: function() {
        console.log(this.stars);
    }
}

WebApp.prototype.__proto__ = objectShare;
MobileApp.prototype.__proto__ = objectShare;

console.log(webapp1.isCCLicence());
console.log(webapp1.like());
console.log(webapp1.showStars());
console.log(mobapp1.isCCLicence());
console.log(mobapp1.like());
console.log(mobapp1.showStars());
