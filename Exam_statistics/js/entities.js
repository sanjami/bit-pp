function Subject(subjectName) {
    this.subjectName = subjectName;
    this.studentList = [];
};

function CreateStudent(name, grade) {
    this.name = name;
    this.grade = grade;
    this.result = (function () {
        if (parseInt(grade) > 5) {
            return 'passed';
        } else {
            return 'failed';
        }
    })();
}

Subject.prototype.addStudent = function (student) {
    this.studentList.push(student);
};

