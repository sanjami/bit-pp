class CreateMovie {

    constructor(name, length, genre) {
        this.movieName = name;
        this.movieLength = length;
        this.movieGenre = genre;
        var setId = (function () {
            return Math.random().toString(36).substr(2, 9);
        })();
        this.movieId = function () {
            return setId;
        };
    };
    getData() {
        let ge = this.movieGenre.charAt(0).toUpperCase() + this.movieGenre.charAt(this.movieGenre.length - 1).toUpperCase();
        let movieData = this.movieName + ', ' + this.movieLength + 'min, ' + ge;
        return movieData;
    };
}


class Program {
    constructor(date) {
        this.date = date;
        this.listOfMovie = [];
        var setId = (function () {
            return Math.random().toString(36).substr(2, 9);
        })();
        this.programId = function () {
            return setId;
        }
    };
    totalNumberOfMovies() {
        return this.listOfMovie.length
    };
    getData() {
        let date = this.date;
        let programLength = 0;
        let numberOfMovie = this.listOfMovie.length;
        if (numberOfMovie == 0) {
           let aboutMovies = date + ", " + 'Program to be announced';
           return aboutMovies;
        }
        this.listOfMovie.forEach(function (element) {
            programLength += parseInt(element.movieLength);
        });

        return date + ", " + numberOfMovie + " movies " + ", duration: " + programLength + " min ";
    };
    addMovie(movie) {
        let counter = 0;
        let totalLength = 0;
        for (let i = 0; i < this.listOfMovie.length; i++) {
            if (movie.movieName == this.listOfMovie[i].movieName) {
                return "Movie already in program";
            }
            totalLength += parseInt(this.listOfMovie[i].movieLength);
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
}
