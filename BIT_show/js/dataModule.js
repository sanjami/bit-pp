const dataModule = (function(){

    class Season {

        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }


    class Cast {
        
        constructor(name) {
            this.name = name;
        }
    }


    class Show {

        constructor(name, image, id, details) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasonsList = [];
            this.castsList = [];
            this.details = details
        }
        addSeason(season) {
            this.seasonsList.push(season);
        }
        addCast(cast) {
            this.castsList.push(cast);
        }


    }

    class TvShows {

        constructor() {
            this.showsList = [];
            this.limit = 50;
        }
        addShow(show) {
            this.showsList.push(show);
        }
        getShow(id){
            
            let result =  this.showsList.filter(show => show.id == id);
            if(result.length){
                return null;
            }
            return result[0];

        }

    }

    return {
        Season: Season,
        Cast: Cast,
        Show: Show,
        TvShows: TvShows
    }



})();