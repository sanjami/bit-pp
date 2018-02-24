"strict mod";


(function () {

    console.log("Hi");
    try {
        function Person(name, surname) {

            this.name = name;
            this.surname = surname;
            this.getData = function () {

                return this.name + ' ' + this.surname;
            }
        }


        function Seat(number, category) {

            this.number = number || Math.floor(90 * Math.random() + 10);
            this.category = category || "e";
            this.getData = function () {

                return this.number + ', ' + this.category.toUpperCase() + ' ';
            }
        }


        function Passenger(person, seat) {

            this.person = person;
            this.seat = seat;
            this.getData = function () {
                var seatCategory = '';
                if (this.seat.category == 'e') {
                    seatCategory = 'economy';
                } else {
                    seatCategory = 'bussines';
                }
                return this.seat.number + ', ' + seatCategory + ', ' + person.getData();
            }
        }


        function Flight(relation, date) {

            this.relation = relation;
            this.date = date;
            this.listOfPassenger = [];
            this.getData = function () {

                var passengers = ' ';
                var bussinesPassenger = 0;
                var aboutFlight = [];
                var relat = '';

                this.listOfPassenger.forEach(function (element) {
                    passengers += ('\t' + '\t' + element.getData() + '\n');
                    if (element.seat.category == 'b') {
                        bussinesPassenger++;
                    }
                })

                var str = this.relation;
                var uppStr = str.toUpperCase();
                var vocalArr = ['A', 'E', 'I', 'O', 'U', ' '];
                var count = 0;
                constArr = [];

                for (i = 0; i < uppStr.length; i++) {
                    if (vocalArr.indexOf(uppStr[i]) === -1) {
                        if (count == 0) {
                            constArr[0] = uppStr[i];
                            count++
                        } else if (count == 1) {
                            if (uppStr[i] == '-') {
                                count++;
                            }
                            constArr[count] = uppStr[i];
                        } else if (count == 2) {
                            constArr[count] = uppStr[i];
                            count++;
                        } else if (count == 3) {
                            constArr[count] = uppStr[i];
                        }
                    }
                }

                relat = constArr[0] + constArr[1] + ' - ' + constArr[2] + constArr[3];

                aboutFlight.push(this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getFullYear() + ' ' + relat + '\n' + passengers + 'Number of bussines passanger on this flight is: ' + bussinesPassenger);

                aboutFlight.push(bussinesPassenger);

                return aboutFlight;
            };

            this.addPassenger = function (passenger) {
                var seatNumbers = [];
                var position = this.listOfPassenger.length;

                this.listOfPassenger.forEach(function (element, index, array) {
                    seatNumbers.push(element.seat.number);
                    if ((element.person.name + element.person.surname) == (passenger.person.name + passenger.person.surname)) {
                        delete array[index];
                        position = index;
                    }
                });
                if (seatNumbers.indexOf(passenger.seat.number) == -1) {
                    if (position <= 100) {
                        this.listOfPassenger[position] = passenger;
                    } else {
                        throw new Error("More than 100 passenger on flight");
                    }
                } else {
                    throw new Error("Seat number already taken");

                }
            }
        }

        function Airport() {

            this.name = 'Nikola Tesla';
            this.listOfFlight = [];
            this.addFlight = function (flight) {
                this.listOfFlight.push(flight);
            };
            this.getData = function () {
                var name = this.name;
                var numberOfPass = 0;
                var totalNumberOfBussinesPass = 0;
                var flights = '';
                var flightData;
                this.listOfFlight.forEach(function (element) {
                    numberOfPass += element.listOfPassenger.length;
                    flightData = element.getData();
                    flights += ('\t' + flightData[0] + '\n');
                    totalNumberOfBussinesPass += flightData[1];
                })
                return 'Airport: ' + name + ', ' + 'total passangers: ' + numberOfPass + ' total bussines passenger: ' + totalNumberOfBussinesPass + '\n' + flights;
            }
        }



        function createFlight(relation, date) {
            var flight = new Flight(relation, date);
            return flight;
        }



        function createPassenger(name, surname, number, category) {
            var person2 = new Person(name, surname);
            var seat2 = new Seat(number, category);

            var passenger2 = new Passenger(person2, seat2);

            return passenger2;
        }


        flight1 = createFlight("Belgrad-Paris", new Date(2017, 9, 25));
        flight2 = createFlight("Barcelona - Belgrade", new Date(2017, 10, 11));

        pass1 = createPassenger("John", "Snow", 1, "e");
        pass2 = createPassenger("Cersei", "Lannister", 5, "b");
        pass3 = createPassenger("Daenerys", "Targaryen", 24);
        pass4 = createPassenger("Tyrion", "Lannister");
        pass5 = createPassenger("John", "Snow", 10, "b")
        pass6 = createPassenger("Cersei", "Lannister", 72, 'b');

        flight1.addPassenger(pass1);
        flight1.addPassenger(pass2);
        flight2.addPassenger(pass3);
        flight2.addPassenger(pass4);
        flight2.addPassenger(pass6);
        flight1.addPassenger(pass6);

        flight1.addPassenger(pass5);
        var airport = new Airport();
        airport.addFlight(flight1);
        airport.addFlight(flight2);
        flight1.addPassenger(pass1);
        console.log(airport.getData());

    } catch (err) {
        console.log('Error is: ' + err.message)
    }

})();