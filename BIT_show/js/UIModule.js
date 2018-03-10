let UIModule = (function(){

    // uzeti selektor
    const selectors = {
        searchBox : '#search-box',
        movieContainer : '#movie_container .container'
    }

    // selektovano polje

    const searchInput = $(selectors.searchBox);
    const movieContainerDiv = $(selectors.movieContainer);
    // uzeti vrednost iz search-a

    let getDataSearh = () => {

        searchData = searchInput.value;

        return searchData;
    }

    // pakovanje filmova u div

    function makeListOfMovies(showLists) {
       
       showLists.forEach(element => {
        let movieDiv = $('<div class="col-md-4  mt-5">');
        let imgTag = $('<img>');
        let linkTag = $('<a>');
           imgTag.attr('src',element.image);
           linkTag.attr('href', `showInfoPage.html#${element.id}`);
           linkTag.text(element.name);

           movieDiv.append(imgTag);
           movieDiv.append(linkTag);
           movieContainerDiv.append(movieDiv);
       });

    }

    function makeOneMovie(show) {

        let oneMovieDiv = $('<div id="show-about-page">');
        $('h1').text(show.name);


    }

    function makeSearchList(name, id) {
        let searchList = $('#serch_list');
        let option = $(`<option>${name}</option>`);
        option.attr('value', id);
        searchList.append(option);
    }

return {
    makeListOfMovies : makeListOfMovies,
    makeOneMovie: makeOneMovie,
    selectors: selectors,
    makeSearchList: makeSearchList
}

})();