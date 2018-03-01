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
        var message = error.OK;
        var ul = document.querySelector('#movieUl');
        var li = document.createElement('li');
        var movieInfo = movie.getData();
        var movieText = document.createTextNode(movieInfo);
        li.appendChild(movieText);
        ul.appendChild(li);
        document.querySelector("#errorMessage").innerHTML = '';
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

var programList = [];

document.querySelector('#programButton').addEventListener('click', createProgram);

function createProgram() {
    var programDate = document.querySelector('#date');
    var dateValue = programDate.value;

    function validation(dateValue) {
        if (dateValue == '') {
            return 'Insert date!'
        } else {
            var program = new Program(dateValue);
            console.log(program);
            programList.push(program);
            var ul = document.querySelector('#programUl');
            var li = document.createElement('li');
            var programInfo = program.getData();
            var programText = document.createTextNode(programInfo);
            li.appendChild(programText);
            ul.appendChild(li);
        }
    }

}