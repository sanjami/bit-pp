"strict mode";

(function () {

    console.log("Hi");
    try {

        function Genre(name) {
            this.name = name
        };

        Genre.prototype.getData = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(this.name.length - 1);

            return (firstLetter + lastLetter).toUpperCase();
        };

        // var drama = new Genre("drama");
        // console.log(drama.getData());



        function Movie(title, length, genre) {
            this.title = title,
            this.genre = genre,
            this.length = length
        }

        Movie.prototype.getData = function () {
            return this.title + ", " + this.length + ", " + this.genre.getData();
        }

        // var movie1 = new Movie("bla", 89, drama);
        // console.log(movie1.getData(drama));

        function Program(date) {
            this.date = date,
            this.listOfMovie = []
        };

        Program.prototype.totalNumberOfMovies = function () {
            return this.listOfMovie.length
        };

        Program.prototype.addMovie = function (movie) {
            var counter = 0;
            var totalLength = 0;
            this.listOfMovie.forEach(function (element) {
                totalLength += element.length;
                if (movie.genere == element.genere) {
                    counter++;
                }
            })
            if (counter < 4 && totalLength < (10 * 60)) {
                this.listOfMovie.push(movie);
            } else {
                console.log('More then 8h of movies or more than 4 of same genre')
            }
        };

        Program.prototype.getData = function () {
            var date = this.date;
            var programLength = 0;
            this.listOfMovie.forEach(function (element) {
                programLength += element.length
            });
            var aboutMovies = "";
            this.listOfMovie.forEach(function (element) {
                aboutMovies += (element.getData() + '\n');
            });
            return date + ", " + programLength + "\n" + aboutMovies;
        };

        // var program1 = new Program(new Date(2018, 3, 17));
        // console.log(program1.addMovie(movie1));
        // console.log(program1);
        // console.log(program1.totalNumberOfMovies());
        // console.log(program1.getData());

        function Festival(name, maxNumber) {
            if (typeof maxNumber == 'string') {
                throw new Error('Maximum number of movie is not number')
            };
            this.name = name,
            this.listOfPrograms = [],
            this.maximumNumberOfMovie = maxNumber;        
        };


        Festival.prototype.numberOfMoviesInPrograms = function () {
            var sum = 0;
            this.listOfPrograms.forEach(function (element) {
                sum += element.totalNumberOfMovies();
            });
            return sum;
        };


        Festival.prototype.addProgram = function (program) {

            if (this.maximumNumberOfMovie > this.numberOfMoviesInPrograms() + program.totalNumberOfMovies()) {
                this.listOfPrograms.push(program);
            } else {
                console.log('More than maximum');
            }
        };

        Festival.prototype.getData = function () {
            var name = this.name;
            var numberOfMovies = this.numberOfMoviesInPrograms();
            var allPrograms = "";
            var message = 'Program to be announced'
            this.listOfPrograms.forEach(function (element) {
                allPrograms += element.getData();
            });
            if (this.listOfPrograms.length != 0) {
                message = name + " has " + numberOfMovies + " titles " + allPrograms;
            }
            return message;
        };


        function createMovie(title, length, genre) {
            if (typeof length == 'string') {
                throw new Error('Length of movie is not number');
            }
            var genre1;
            genre1 = new Genre(genre)

            var movie;
            movie3 = new Movie(title, length, genre1);
            return movie3;
        };


        function createProgram(date) {
            var program1 = new Program(date);
            return program1;
        }

        var BerlinFest = new Festival('BerlinFest', 10)

        var firstDay = createProgram(new Date(2018, 3, 17));
        var secondDay = createProgram(new Date(2018, 3, 18));

        var strong12 = createMovie('12 Strong', 120, 'drama');
        var allMoney = createMovie('All The Money In The World', 108, 'drama');
        var blackPanther = createMovie('Black Panther', 134, 'action');
        var jumanji = createMovie('Jumanji: Welcome to the Jungle', 119, 'adventure');
        var some = createMovie('some', 120, 'drama');
        var sl = createMovie('nesto', 100, 'drama');

        firstDay.addMovie(strong12);
        firstDay.addMovie(allMoney);
        firstDay.addMovie(blackPanther);
        firstDay.addMovie(jumanji);


        secondDay.addMovie(strong12);
        secondDay.addMovie(allMoney);
        secondDay.addMovie(blackPanther);
        secondDay.addMovie(jumanji);

        BerlinFest.addProgram(firstDay);
        BerlinFest.addProgram(secondDay);


        console.log(BerlinFest.getData());

    } catch (err) {
        console.log(err.message);
    }

}





)();