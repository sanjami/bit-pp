"strict mod";


(function () {

    console.log("Hi");

    function Person(name, surname) {

        this.name = name;
        this.surname = surname;
        this.getData = function () {

            return this.name + ' ' + this.surname ;
        }

    }

    var person1 = new Person("John", "Snow");
    // console.log(person1.getData());
    




    function Seat(number, category) {

        this.number = number || Math.floor(90 * Math.random() + 10);
        this.category = category || "e";
        this.getData = function () {

            return   this.number + ', ' + this.category.toUpperCase() + ' ';
        }
    }

    var seat1 = new Seat(undefined, "b");
    // console.log(seat1.getData());


    function Passenger(person, seat) {

        this.person = person;
        this.seat = seat;
        this.getData = function () {

            return seat.getData() + person.getData();
        }
    }

    var passenger1 = new Passenger(person1, seat1);
    // console.log(passenger1.getData());





    function Flight(relation, date) {

        this.relation = relation;
        this.date = date;
        this.listOfPassenger = [];
        this.getData = function () {
            var passengers = ' ';
            this.listOfPassenger.forEach(function (element) {
                passengers += element.getData();
            }) 
            console.log(passengers);
            return this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getFullYear() + ', ' + this.relation + '\n' + passengers;
        };
        this.addPassenger = function (passenger) {

            this.listOfPassenger.push(passenger);
        };


    }

    // var flight1 = new Flight("Belgrade - Paris", new Date(2018, 5, 2));
    // flight1.addPassenger(passenger1);
    // console.log(flight1.getData());




    function Airport() {

        this.name = 'Nikola Tesla';
        this.listOfFlight = [];
        this.addFlight = function (flight) {
                this.listOfFlight.push(flight);
        }
    }

    function createFlight(relation, date) {
        var flight = new Flight(relation, date);
        return flight;

    }
    console.log(createFlight("Belgrad-Paris", new Date(2017, 9, 25)));

    function createPassenger(name, surname, number, category) {
        var person2 = new Person(name, surname);
        var seat2 = new Seat(number, category);

        var passenger2 = new Passenger(person2, seat2);
        
        return passenger2;
    }

    console.log(createPassenger("Cersei", "Lannister", 5, "b"));




})();