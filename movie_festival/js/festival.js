var movieList = [];


document.querySelector('#movieButton').addEventListener('click', createMovie);

function createMovie() {

    var movieTitle = document.querySelector('#title');
    var movieLength = document.querySelector('#length');
    var movieGenre = document.querySelector('#genre');

    var titleValue = movieTitle.value;
    var lengthValue = movieLength.value;
    var genreValue = movieGenre.value;

    var error = {
        OK: '',
        INSERT_TITLE: 'Missing title!',
        INSERT_LENGTH: 'Missing length!',
        INSERT_GENRE: 'Missing genre!'
    }

    function validation(titleValue, lengthValue, genreValue) {
        if (titleValue != "") {
            if (parseInt(lengthValue) > 0 && parseInt(lengthValue) < 240) {
                if (genreValue != '-') {
                    return error.OK;
                }
                return error.INSERT_GENRE;
            }
            return error.INSERT_LENGTH;
        }
        return error.INSERT_TITLE;
    }

    var validationResult = validation(titleValue, lengthValue, genreValue);

    if (validationResult != error.OK) {
        var message = validationResult;
    }

    if (validationResult == error.OK) {
        var movie = new CreateMovie(titleValue, lengthValue, genreValue);
        movieList.push(movie);

        var movieIndex = movieList.indexOf(movie);
        var message = error.OK;

        var movieInfo = movie.getData();

        var movieText = document.createTextNode(movieInfo);
        var ul = document.querySelector('#movieUl');
        var li = document.createElement('li');
        li.appendChild(movieText);
        ul.appendChild(li);
        document.querySelector("#errorMessage").innerHTML = '';

        var movieText = document.createTextNode(movieInfo);
        var select = document.querySelector('#movieSelect');
        var option = document.createElement('option');
        option.appendChild(movieText);
        option.value = movieIndex;
        select.appendChild(option);
    }

    var text = document.createTextNode(message);
    var errorDiv = document.querySelector("#errorMessage");
    errorDiv.appendChild(text);



    var totalLength = 0;

    for (var i = 0; i < movieList.length; i++) {
        totalLength = parseInt(totalLength) + parseInt(movieList[i].movieLength);
    }

    var allMoviesLength = document.querySelector('#allMoviesText').textContent = totalLength;

    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "-";

}

//create program        


var programList = [];

document.querySelector('#programButton').addEventListener('click', createProgram);

function createProgram() {
    var programDate = document.querySelector('#date');
    var dateValue = programDate.value;

    function validation(dateValue) {
        if (dateValue == '') {
            return 'Insert date!'
        } else {
            return "OK"
          }
        }
    
        var validationResult = validation(dateValue);

        if(validationResult == 'OK'){
            var program = new Program(dateValue);
            programList.push(program);
            var programIndex = programList.indexOf(program);

            var programInfo = program.getData();

            var programText = document.createTextNode(programInfo);           
            var ul = document.querySelector('#programUl');
            var li = document.createElement('li');
            li.appendChild(programText);
            ul.appendChild(li);
            
            
            var programText = document.createTextNode(programInfo);
            var select = document.querySelector('#programSelect');
            var option = document.createElement('option');
            option.appendChild(programText);
            option.value = programIndex;
            select.appendChild(option);
        }
    }


 //Add movie to program  

 document.querySelector('#addMovieToProgram').addEventListener('click', addMovieToProgram);

 function addMovieToProgram() {
     var movieIndex = document.querySelector('#movieSelect').value;
     var movie = movieList[movieIndex];
     var programIndex = document.querySelector('#programSelect').value;
     var program = programList[programIndex];
     program.addMovie(movie);
    };

// TODO update program data, messages
