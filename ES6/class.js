class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        console.log(`${this.name} ${this.surname}`);
    } 
}


class Programmer extends Person {

    constructor(name, surname, ...languages) {
        super(name, surname);
        this.languages = languages;
    }
    printProgrammerData(){
        super.printPersonData();
        console.log(`${this.languages}`)
    }
    learnNewLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

}

let person1 = new Person('pera', 'peric');
console.log(person1.printPersonData());

let programer1 = new Programmer('pera', 'peric', 'PHP', 'bla');
programer1.learnNewLanguage('JS');
programer1.learnNewLanguage('Python');
console.log(programer1.printProgrammerData());