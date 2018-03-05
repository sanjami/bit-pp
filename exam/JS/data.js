
var dataModule = (function () {

    function CreateSubject(subjectName) {
        this.subjectName = subjectName;
    }

    CreateSubject.prototype.getSubjectName = function(){
        var subjectData = this.subjectName;
        return subjectData;
    }


    
    function CreateStudent(name, surname){
        this.name = name;
        this.surname = surname;
    }

    CreateStudent.prototype.getStudentData = function(){
        var studentData = this.name + this.surname;
        return studentData;
    }


    
    function CreateExam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    CreateExam.prototype.getExamInfo = function() {
        var examData = this.subject.getSubjectName()  + this.student.getStudentData();
        return examData;
    }

    CreateExam.prototype.hasPassed = function(){
        if(this.grade > 5){
            return true;
        }
        return false;
    }

}) ();