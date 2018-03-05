var formModule = (function () {

var formSelectors = {
    subjectSelector: '.add-subject',
    studentSelector: '.add-student-name',
    gradeSelector: '.add-grade',
    passedSelector : '.exam-passed-count',
    passedPercentageSelector : '.exam-passed-percentage',
    failedSelector : '.exam-failed-count',
    failedPercentageSelector : '.exam-failed-percentage'
}


var subjectInput = document.querySelector(subjectSelector);
var studentInput = document.querySelector(studentSelector);
var gradeInput = document.querySelector(gradeSelector);
var totalPassed = document.querySelector(passedSelector);
var passedPercentage = document.querySelector(passedPercentageSelector);
var totalFailed = document.querySelector(failedSelector);
var failedPercentage = document.querySelector(failedPercentageSelector);



function getFormData() {
    var formData = {};
    formData.subjectInputData = subjectInput.value;
    formData.studentInputData = studentInput.value;
    formData.gradeInputData = gradeInput.value;
}


var errors = {
    OK: 'OK',
    MISSING_DATA: 'Missing data!',
    WRONG_STUDENT: 'Both name and surname should start with capitals.',
    WRONG_GRADE: 'A grade should be from 1 to 10.'
}


var studentValidation = function validateStudent(student) {
    var position = student.indexOf(' ');
    var name = student.slice(0, position);
    var surname = student.slice(position + 1);
    var nameUp = name.charAt(0).toUpperCase();
    var surnameUp = surname.charAt(0).toUpperCase();

    if (name.charAt(0) == nameUp || surname.charAt(0) == surnameUp) {
        return true;
    }
    return false;
}


function validation(subject, student, grade) {
    if (subject == '' || student == '' || grade == '') {
        return errors.MISSING_DATA;
    } else if (student.indexOf(' ') == -1) {
        return errors.WRONG_STUDENT;
    } else if (studentValidation == false) {
        return errors.WRONG_STUDENT
    } else if (grade < 1 || grade > 10) {
        return errors.WRONG_GRADE;
    }
    return errors.OK;
}


function updateList() {
    var text = document.createTextNode(student.getStudentData());
    var li = document.createElement('li');
    var ul = document.createElement('ul');
    li.appendChild(text);
    ul.appendChild(li);
}

var passedStudents = 0;
var failedStudents = 0;


function updateStatistics(){
    totalPassed.textContent = passedStudents;
    totalFailed.textContent = failedStudents;
    passedPercentage.textContent = passedStudents / (passedStudents+failedStudents) * 100 + '%';
    failedPercentage.textContent = failedStudents / (passedStudents+failedStudents) * 100 + '%';

}

}) ();