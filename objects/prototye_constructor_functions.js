function Person (name, surname) {
    this.name = name, 
    this.surname = surname
};

var pera = new Person('pera', 'peric');

Person.prototype.getFullName = function() {
    return this.name + this.surname;
};

Person.prototype.printName = function() {
    console.log(this.getFullName());
};

function Programer(name, surname, language){
    Person.call(this, name, surname);
    this.language = language;
};

var zika = new Programer('zika', 'zikic', 'js');

Programer.prototype = Object.create(Person.prototype);
Programer.prototype.constructor = Programer;


Programer.prototype.getProgInfo = function() {
    console.log( this.language);
};

zika.getProgInfo();