var totalStudent = 0;
var totalPassed = 0;
var totalFailed = 0;

document.querySelector("#subject").addEventListener("change", function (event) {
    var allOptions = document.querySelectorAll(".resultList");
    allOptions.forEach(function (element) {
        element.classList.add("hiden")
    });
    var resultList = document.querySelector(".list" + this.value);
    resultList.classList.toggle("hiden");
})


document.querySelector(".btn").addEventListener("click", inputData);
document.querySelector("body").addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
        inputData;
    }
})



function inputData() {

    var subjectIndexSt = document.querySelector("#subject").value;
    var subjectIndexNum = parseInt(subjectIndexSt);

    var subjectName;

    switch (subjectIndexNum) {
        case 1:
            subjectName = 'WEB';
            break;
        case 2:
            subjectName = 'JavaScript';
            break;
        case 3:
            subjectName = "SPA";
            break;
    };

    var subjectObject = new Subject(subjectName);

    var nameInput = document.querySelector("#name");
    var gradeInput = document.querySelector("#grade");
    var studentName = nameInput.value;
    var studentGrade = gradeInput.value;

    function validation(studentName, studentGrade) {
        if (studentName == '' || studentGrade == '') {
            return "All data is required"
        } else {
            return "OK"
        }
    }
    result = validation(studentName, studentGrade);

    if (result == 'All data is required') {
        var text = document.createTextNode(result);
        var errorDiv = document.querySelector("#errorText");
        errorDiv.appendChild(text);
    } else {

        var student = new CreateStudent(studentName, studentGrade);


        subjectObject.addStudent(student);

        var studentText = student.name + ', ' + student.grade;
        var studentResult = student.result;

        var passedList = document.querySelector(".passedList" + subjectIndexSt);
        var failedList = document.querySelector(".failedList" + subjectIndexSt);
        var liStudent = document.createElement("li");
        var textLi = document.createTextNode(studentText);
        liStudent.appendChild(textLi);


        totalStudent++;

        if (studentResult == 'passed') {
            passedList.appendChild(liStudent);
            totalPassed++
        } else {
            failedList.appendChild(liStudent)
            totalFailed++
        };


        var percent = parseInt(totalFailed / totalStudent * 100);

        document.querySelector("#passedNum").textContent = totalPassed;
        document.querySelector("#failedNum").textContent = totalFailed;
        document.querySelector("#failedPercent").textContent = percent + '%';
        document.querySelector("#total").textContent = ' ' + totalStudent;

        nameInput.value = '';
        gradeInput.value = '';
        document.querySelector("#errorText").innerHTML = '';
    }
}