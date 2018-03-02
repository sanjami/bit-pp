function CreateMovie(name, length, genre) {
    this.movieName = name;
    this.movieLength = length;
    this.movieGenre = genre;
}


CreateMovie.prototype.getData = function () {
    var ge = this.movieGenre.charAt(0).toUpperCase() + this.movieGenre.charAt(this.movieGenre.length - 1).toUpperCase();
    var movieData = this.movieName + ', ' + this.movieLength + 'min, ' + ge;
    return movieData;
}


function Program(date) {
    this.date = date,
    this.listOfMovie = []
};


Program.prototype.totalNumberOfMovies = function () {
    return this.listOfMovie.length
};


Program.prototype.getData = function () {
    var date = this.date;
    var programLength = 0;
    var aboutMovies = "";
    if(this.listOfMovie.length == 0) {
    aboutMovies = 'Program to be announced'
    }
    this.listOfMovie.forEach(function (element) {
        programLength += element.length
    });
    this.listOfMovie.forEach(function (element) {
        aboutMovies += (element.getData() + '\n');
    });
    return date + ", " + programLength + "\n" + aboutMovies;
};


Program.prototype.addMovie = function (movie) {
    var counter = 0;
    var totalLength = 0;
    for (i = 0; i < this.listOfMovie.length; i++) {
        if(movie.movieName == this.listOfMovie[i].movieName ) {
            console.log("Movie already in program"); 
        } 
        totalLength += this.listOfMovie[i].length;
        if (movie.genere == this.listOfMovie[i].genere) {
            counter++;
        }    
    }
    if (counter < 4 && totalLength < (10 * 60)) {
        this.listOfMovie.push(movie);
    } else {
        console.log('More then 8h of movies or more than 4 of same genre')
    }
};