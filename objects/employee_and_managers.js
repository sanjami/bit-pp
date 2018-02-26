function Employee(name, surname, specialization, salary) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.salary = salary
}


Employee.prototype.getSpecialization = function() {
    console.log(this.specialization);
}

function Manager(name, surname, department, salary) {
    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary
}

Manager.prototype.getDepartment = function() {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function(department) {
    this.department = department;
}



var e1 = new Employee("Pera", "Peric", "radnik", 500);
 // console.log(e1);

var m1 = new Manager("Laza", "Lazarevic", "sales", 700);
 // console.log(m1);


m1.changeDepartment("analytics");

var shareMethods = {
    getData: function() {
        console.log(this.name, this.surname);
    },
    getSalary: function() {
        console.log(this.salary);
    },
    increaseSalary: function() {
        this.salary = this.salary*1.1
        return this.salary
    }
}

Employee.prototype.__proto__=shareMethods;
Manager.prototype.__proto__ =shareMethods;


console.log(e1.getData());
console.log(e1.getSalary());
console.log(e1.increaseSalary());
console.log(m1.getData());
console.log(m1.getSalary());
console.log(m1.increaseSalary());






