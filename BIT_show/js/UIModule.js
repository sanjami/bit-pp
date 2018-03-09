let UIModule = (function () {

    // uzeti selektor
    const selectors = {
        searchBox: '#search-box',
        movieContainer: '#movie_container',
        oneMovieContainer: '#oneshow_container'
    }

    // selektovano polje

    const searchInput = $(selectors.searchBox);
    const movieContainerDiv = $(selectors.movieContainer);
    const oneMovieContainerDiv = $(selectors.oneMovieContainer)
    // uzeti vrednost iz search-a

    let getDataSearh = () => {

        searchData = searchInput.value;

        return searchData;
    }

    // pakovanje filmova u div

    function makeListOfMovies(showLists) {

        showLists.forEach(element => {
            let movieDiv = $('<div>');
            let imgTag = $('<img>');
            imgTag.css({ 'width': '100%', 'margin-top': '10%' });
            let linkTag = $('<a>');
            imgTag.attr('src', element.image);
            linkTag.attr('href', '#');
            linkTag.attr('id', element.id);
            linkTag.addClass('clickLink');
            linkTag.text(element.name);

            movieDiv.append(imgTag);
            movieDiv.append(linkTag);
            movieDiv.attr('class', 'col-4');
            movieContainerDiv.append(movieDiv);
        });

    }

    function showMovieInfo(show) {

        $('h1').text(show.name);
        let imgDiv = $('div');
        imgDiv.addClass('col-6');
        let imgTag = $('<img>');
        imgTag.attr('src', show.image);
        imgDiv.append(imgTag);

        
        oneMovieContainerDiv.append(imgDiv);

    }



    return {
        makeListOfMovies: makeListOfMovies,
        showMovieInfo: showMovieInfo
    }

})();