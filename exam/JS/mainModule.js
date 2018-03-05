
var mainModule = (function (UIModule, dataModule) {
    
    document.querySelector(UIModule.formSelectors.buttonSelector).addEventListener('click', function () {

        UIModule.clearError()
        var formData = UIModule.getFormData();
        var validationMessage = UIModule.validation(formData.subjectInputData, formData.studentInputData, formData.gradeInputData);

        if (validationMessage != "OK") {
            UIModule.setError(validationMessage);
            return;
        } 

        var student = dataModule.createStudent(formData.studentInputData);
        var exam = dataModule.createExam(formData.subjectInputData, student, formData.gradeInputData);
  
        


    function updateStatistics(exam) {
        // TODO some magic to update counters and lists on page
    }

 });
}) (UIModule, dataModule);