
var mainModule = (function (UIModule, dataModule) {
    var passedStudent = 0;
    var failedStudent = 0;

    document.querySelector(UIModule.formSelectors.buttonSelector).addEventListener('click', function () {

        // brisanje gresaka

        UIModule.clearError()
        var formData = UIModule.getFormData();

        var validationMessage = UIModule.validation(formData.subjectInputData, formData.studentInputData, formData.gradeInputData);
console.log(validationMessage);
        if (validationMessage != "OK") {
            UIModule.setError(validationMessage);
            return;
        } 

        var newExam = dataModule.examFactory(formData.subjectInputData, formData.studentName, formData.studentSurname, formData.gradeInputData);

        var passList = document.querySelector(UIModule.formSelectors.passedListSelector);
        var failedList = document.querySelector(UIModule.formSelectors.failedListSelector);

        var text = document.createTextNode(newExam.getExamInfo());

        var list = UIModule.updateList(text);

        var passed = newExam.hasPassed();

        if(passed == true) {
            passList.appendChild(list);
            passedStudent++;
        } else {
            failedList.appendChild(list);
            failedStudent++;
        }

        UIModule.updateStatistics(passedStudent, failedStudent);


 });
}) (UIModule, dataModule);