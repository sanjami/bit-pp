"strict mode";

(function () {

        console.log("Hi");

        function Genre(name) {

            this.name = name,
            this.getData = function () {
                    var firstLetter = name.charAt(0);
                    var lastLetter = name.charAt(name.length - 1);

                    return (firstLetter + lastLetter).toUpperCase();
                };


        }


        var cartoon = new Genre('cartoon');
        var fantasy = new Genre('Fantasy');
      //  console.log(cartoon);


        function Movie(title, length, genre) {

                this.title = title,
                this.genre = genre.name,
                this.length = length,
                this.getData = function () {

                    return this.title + ", " + this.length + ", " + genre.getData();
                }


        }


        var movie1 = new Movie("Betmen", 210, cartoon);
        var movie2 = new Movie("Spider-man", 108, fantasy);
        // console.log(movie1.getData());
        // console.log(movie2.getData());


        function Program(date) {

            this.date = date,
            this.listOfMovie = [],
            this.totalNumberOfMovies = function(){
                return this.listOfMovie.length},
            this.addMovie = function (movie) {

                    this.listOfMovie.push(movie);
                },
            this.getData = function() {
                    var date = this.date;
                    var programLength = 0;
                    this.listOfMovie.forEach(function(element) {
                        programLength += element.length
                    }              
                )
                 var aboutMovies = "";
                 this.listOfMovie.forEach(function(element){
                     aboutMovies += element.getData();
                 });
                return date + ", " + programLength + "\n" + aboutMovies;
                }           
        }


        var firstDay = new Program(new Date(2018, 4, 18));
        firstDay.addMovie(movie1);
        firstDay.addMovie(movie2);
        //console.log(firstDay.totalNumberOfMovies());
       // console.log(firstDay.getData());



        function Festival(name) {

            this.name = name,
            this.listOfPrograms = [],
            this.numberOfMoviesInPrograms = function () {
                    var sum = 0;
                    this.listOfPrograms.forEach(function (element) {
                        sum += element.totalNumberOfMovies();
                    });
                    return sum;
                },
            this.addProgram = function(program) {
                this.listOfPrograms.push(program);
            },
            this.getData = function() {
                var name = this.name;
                var numberOfMovies = this.numberOfMoviesInPrograms();
                var allPrograms = "";
                 this.listOfPrograms.forEach(function(element) {
                    allPrograms += element.getData();
                }            
            );
            return name + " has " + numberOfMovies + " titles " + allPrograms;

            }

        }

        var berlinFest = new Festival("Berlin");
        berlinFest.addProgram(firstDay);
       // console.log(berlinFest.numberOfMoviesInPrograms());
       // console.log(berlinFest.getData());
       // console.log(berlinFest);


        function createMovie(title, length, genre ) {
            var genre1;
            genre1 = new Genre(genre)
            
            var movie;
            movie3 = new Movie(title, length, genre1);
            console.log(movie3);
            return movie3; 
        };

        var starWars = createMovie("Star wars", 120, 'fantasy');
       console.log(starWars);
 

        function createProgram(date) {
            var program1 = new Program(date);
            return program1;
        }


        var secondDay = createProgram(new Date(2018, 2, 12));
        secondDay.addMovie(starWars);
        console.log(secondDay);













































    }





)();