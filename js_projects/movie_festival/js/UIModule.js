let UIModuel = (function(){

    // uzeti selektori 
    
    const formSelectors = {
        titleSelector: '#title',
        lenghtSelector = '#length',
        genreSelector = '#genre',
        dateSelector = '#date',
        errorSelector = "#errorMessage",
        ulMovieSelector = '#movieUl',
        ulProgramSelector = '#programUl',
        movieSelector = '#movieSelect',
        programSelector = '#programSelect',
        movieButtonSelector = '#movieButton',
        programButtonSelector = '#programButton',


    }


    //selektrovana polja 
    const movieTitle = document.querySelector(formSelectors.titleSelector);
    const movieLength = document.querySelector(formSelectors.lenghtSelector);
    const movieGenre = document.querySelector(formSelectors.genreSelector);
    const programDate = document.querySelector(formSelectors.dateSelector);
    const errorDiv = document.querySelector(formSelectors.errorSelector);
    const ulMovie = document.querySelector(formSelectors.ulMovieSelector);
    const ulProgram = document.querySelector(formSelectors.ulProgramSelector);
    const selectMovie = document.querySelector(formSelectors.movieSelector);
    const selectProgram = document.querySelector(formSelectors.programSelector);

    let getDataAboutMovie = () => {

        let aboutMovieData={};
        aboutMovieData.titleValue = movieTitle.value;
        aboutMovieData.lengthValue = movieLength.value;
        aboutMovieData.genreValue = movieGenre.value;

        return aboutMovieData;
    }

 

    // provera validnosti podataka

    const error = {
        OK: '',
        INSERT_TITLE: 'Missing title!',
        INSERT_LENGTH: 'Missing length!',
        INSERT_GENRE: 'Missing genre!'
    }

    let movieValidation = (titleValue, lengthValue, genreValue) => {
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

    
    let setError = (message) => {
     let text = document.createTextNode(message);
     errorDiv.appendChild(text);
    }

    let clearError = () => {
        errorDiv.textContent = "";
    }

    let dateValidation = (dateValue) => {
        if (dateValue == '') {
            return 'Insert date!'
        } else {
            return "OK"
        }
    }


    // vracanje podataka u listu

    
    let updateListOfMovie = (movieInfo, movieIndex) => {

        let movieText = document.createTextNode(movieInfo);
        const li = document.createElement('li');
        li.appendChild(movieText);
        ulMovie.appendChild(li);

        var option = document.createElement('option');
        option.appendChild(movieText);
        option.value = movieIndex;
        selectMovie.appendChild(option);
    }

    let updateListOfProgram = (programInfo, programIndex) => {

        let programText = document.createTextNode(programInfo);
        const li = document.createElement('li');
        li.setAttribute('data-programIndex', programIndex);
        li.appendChild(programText);
        ulProgram.appendChild(li);


       
        var option = document.createElement('option');
        option.appendChild(programText);
        option.value = programIndex;
        selectProgram.appendChild(option);
    }

    return {
        formSelectors: formSelectors,
        error: error,
        getDataAboutMovie: getDataAboutMovie,
        movieValidation: movieValidation,
        dateValidation: dateValidation,
        setError: setError,
        clearError: clearError,
        updateListOfMovie: updateListOfMovie,
        updateListOfProgram: updateListOfProgram
    }


})();