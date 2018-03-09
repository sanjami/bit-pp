let UIModule = (function(){

    // uzeti selektor
    const selectors = {
        searchBox : '#search-box',
        movieContainer : '#movie_container'
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
        console.log(showLists);
       
       showLists.forEach(element => {
        let movieDiv = $('<div>');
        let imgTag = $('<img>');
        let linkTag = $('<a>');
           imgTag.attr('src',element.image);
           linkTag.attr('href', `showInfoPage.html/?${element.id}`);
           linkTag.text(element.name);

           movieDiv.append(imgTag);
           movieDiv.append(linkTag);
           movieContainerDiv.append(movieDiv);
       });

    }

return {
    makeListOfMovies : makeListOfMovies
}

})();