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


