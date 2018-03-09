const mainModule = (function(dataModule, UIModule){

$(function(){

    let request = $.ajax({

        url: 'http://api.tvmaze.com/shows',
        method: 'GET'

    })

    request.done(function(msg){
        let firsFifty = msg.slice(0, 50);
        let tvShows = new dataModule.TvShows();
        firsFifty.forEach(element => {
        let show = new dataModule.Show(element.name, element.image.medium, element.id, element.summary);
        
        tvShows.addShow(show); 
    });
    UIModule.makeListOfMovies(tvShows.showsList)



    })


})
})(dataModule, UIModule);