var UIModule = (function () {

var formSelectors = {
    subjectSelector: '.add-subject',
    studentSelector: '.add-student-name',
    gradeSelector: '.add-grade',
    passedSelector : '.exam-passed-count',
    passedPercentageSelector : '.exam-passed-percentage',
    failedSelector : '.exam-failed-count',
    failedPercentageSelector : '.exam-failed-percentage',
    buttonSelector: '.add-btn',
    errorSelector: '#error'
}


var subjectInput = document.querySelector(formSelectors.subjectSelector);
var studentInput = document.querySelector(formSelectors.studentSelector);
var gradeInput = document.querySelector(formSelectors.gradeSelector);
var totalPassed = document.querySelector(formSelectors.passedSelector);
var passedPercentage = document.querySelector(formSelectors.passedPercentageSelector);
var totalFailed = document.querySelector(formSelectors.failedSelector);
var failedPercentage = document.querySelector(formSelectors.failedPercentageSelector);
var errorBlock = document.querySelector(formSelectors.errorSelector);

var errors = {
    OK: 'OK',
    MISSING_DATA: 'Missing data!',
    WRONG_STUDENT: 'Both name and surname should start with capitals.',
    WRONG_GRADE: 'A grade should be from 1 to 10.'
}

function getFormData() {
    var formData = {};
    formData.subjectInputData = subjectInput.value;
    formData.studentInputData = studentInput.value;
    formData.gradeInputData = gradeInput.value;
    return formData;
}


var studentValidation = function validateStudent(nameSurname) {
    var position =  nameSurname.indexOf(' ');
    var name =  nameSurname.slice(0, position);
    var surname =  nameSurname.slice(position + 1);
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

function setError(message){
    errorBlock.textContent = message;
}

function clearError(){
    errorBlock.textContent = "";
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

return {
    formSelectors : formSelectors,
    errors : errors,
    getFormData : getFormData,
    validation : validation,
    setError : setError,
    clearError : clearError,
    updateList : updateList,
    updateStatistics : updateStatistics
}
}) ();