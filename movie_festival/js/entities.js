function CreateMovie(name, length, genre) {
    this.movieName = name;
    this.movieLength = length;
    this.movieGenre = genre;
    this.movieId = (function (){
        var number = Math.floor(89999 * Math.random() +10000);
        return number;
    }) ();
}


CreateMovie.prototype.getData = function () {
    var ge = this.movieGenre.charAt(0).toUpperCase() + this.movieGenre.charAt(this.movieGenre.length - 1).toUpperCase();
    var movieData = this.movieName + ', ' + this.movieLength + 'min, ' + ge;
    return movieData;
}


function Program(date) {
    this.date = date,
    this.listOfMovie = [],
    this.programId = (function (){
        var number = Math.floor(89999 * Math.random() +10000);
        return number;
    }) ();
};


Program.prototype.totalNumberOfMovies = function () {
    return this.listOfMovie.length
};


Program.prototype.getData = function () {
    var date = this.date;
    var programLength = 0;
    var numberOfMovie = this.listOfMovie.length;
    if(this.listOfMovie.length == 0) {
    aboutMovies = 'Program to be announced';
    }
    this.listOfMovie.forEach(function (element) {
        programLength += parseInt(element.movieLength);
    });
    
    return date + ", " + numberOfMovie + " movies " + ", duration: " + programLength + " min ";
};


Program.prototype.addMovie = function (movie) {
    var counter = 0;
    var totalLength = 0;
    for (i = 0; i < this.listOfMovie.length; i++) {
        if(movie.movieName == this.listOfMovie[i].movieName ) {
            return "Movie already in program"; 
        } 
        totalLength += parseInt(this.listOfMovie[i].movieLength) ;
        if (movie.genre == this.listOfMovie[i].genre) {
            counter++;
        }    
    }
    if (counter < 4 && totalLength < (10 * 60)) {
        this.listOfMovie.push(movie);
    } else {
        return 'More then 8h of movies or more than 4 of same genre'
    }
};