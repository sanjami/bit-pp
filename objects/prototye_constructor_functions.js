function Person (name, surname) {
    this.name = name, 
    this.surname = surname
};

var pera = new Person('pera', 'peric');

Person.prototype.fullName = function() {
    return this.name + this.surname;
};

Person.prototype.printInfo = function() {
    console.log(this.fullName())
};

function Programer(name, surname, language){
    Person.call(this, name, surname);
    this.language = language;
};


Programer.prototype = Object.create(Person.prototype);
Programer.prototype.constructor = Programer;


Programer.prototype.printInfo = function() {
    var fullName = Object.getPrototypeOf(Programer.prototype).fullName.call(this);
    //var fulllName = Programer.prototype.__proto__.fullName.call(this);
    console.log( fullName + this.language);
};

var zika = new Programer('zika', 'zikic', 'js');
zika.printInfo();



// closures


function Person(personName){
    var name;
 
    name = personName;
 
    this.getName = function(){
        return name;
    }
   
    this.changeName = function(newName){
        name = newName;
    }
 }
 
 var pera = new Person('Pera');
 //property name is private - it cannot be accessed
 //console.log(pera.name);
 console.log(pera.getName());
 pera.changeName('Perica');
 console.log(pera.getName());
 