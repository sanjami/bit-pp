const mainModule = (function (dataModule, UIModule) {


    function init() {

        var tvShows;

        let request = $.ajax({

            url: 'http://api.tvmaze.com/shows',
            method: 'GET'

        })

        request.done(function (msg) {
            let firsFifty = msg.slice(0, 50);
            tvShows = new dataModule.TvShows();
            firsFifty.forEach(element => {
                let show = new dataModule.Show(element.name, element.image.medium, element.id, element.summary);

                tvShows.addShow(show);
            });

            UIModule.makeListOfMovies(tvShows.showsList)
        })

        // search box

        $('#search-box').keyup(function (event){
            let value = (this).value;
          
            let request = $.ajax({
                url: `http://api.tvmaze.com/search/shows?q=${value}`,
                method: 'GET'
    
            })
    
            request.done(function (msg) {
                msg.forEach(element => {
                    let movieName = element.show.name;
                    let id = element.show.id;
                    UIModule.makeSearchList(movieName, id);
                })
            })

        })

        $('#search-box').change(function(event){
            id = this.value;
            window.location.href = `showInfoPage.html#${id}`
        })

    }



    function initSinglePage() {

        let id = window.location.hash.slice(1);

        let request = $.ajax({

            url: `http://api.tvmaze.com/shows/${id}`,
            method: 'GET',
            data: {
                embed: ['seasons', 'cast']
            }

        })
        let show;
        request.done(function (msg) {
          
            show = new dataModule.Show(msg.name, msg.image.original, msg.id, msg.summary);

           msg._embedded.seasons.forEach((element) => {

                season = new dataModule.Season(element.premiereDate, element.endDate);
                show.addSeason(season);
           })

           msg._embedded.cast.forEach((element) => {

                cast = new dataModule.Cast(element.person.name);
                show.addCast(cast);
           })
           
           UIModule.makeOneMovie(show);

        })


    }

    return {
        init: init,
        initSinglePage: initSinglePage
    }

})(dataModule, UIModule);