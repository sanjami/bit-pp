const mainModule = (function (dataModule, UIModule) {

    var tvShows = new dataModule.TvShows();

    let request = $.ajax({
        url: 'http://api.tvmaze.com/shows',
        method: 'GET'

    })

    request.done(function (msg) {
        let firsFifty = msg.slice(0, 50);
        firsFifty.forEach(element => {
            let show = new dataModule.Show(element.name, element.image.medium, element.id, element.summary);
            tvShows.addShow(show);
        });
        UIModule.makeListOfMovies(tvShows.showsList);
    })


    
    
    $(document).on('click', 'a', function (event) {
     
     const clickedId = $(this).attr('id');
     var clickedShow;
     
     for (let i = 0; i < tvShows.showsList.length; i++) {
         if(tvShows.showsList[i].id == clickedId) {
             clickedShow = tvShows.showsList[i];
            }
        }
        
        let seasonRequest = $.ajax({
            url: `https://api.tvmaze.com/shows/${clickedId}/seasons`,
            method: 'GET'
        })
        
        seasonRequest.done(function(resSeasons){
            
            resSeasons.forEach((element) => {
                var season = new dataModule.Season(element.premiereDate, element.endDate);
                clickedShow.addSeason(season);
            })
        });
        
        let castRequest = $.ajax({
            url: `https://api.tvmaze.com/shows/${clickedId}/cast`,
            method: 'GET'
        })
        
        castRequest.done(function(resCast){
            
            resCast.forEach((element) => {
                var cast = new dataModule.Cast(element.person.name);
                clickedShow.addCast(cast);
            })
        });
        
        UIModule.showMovieInfo(clickedShow);
        console.log(clickedShow);
        
      //  window.location.href = 'showinfoPage.html';
    });
    

})(dataModule, UIModule);