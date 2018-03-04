var totalStudent1 = [0, 0];
var totalStudent2 = [0, 0];
var totalStudent3 = [0, 0];
var totalStudent;
var percent;

var subjectName;

var subjectIndexSt;

document.querySelector("#subject").addEventListener("change", function (event) {

    subjectIndexSt = document.querySelector("#subject").value;
    var subjectIndexNum = parseInt(subjectIndexSt);

    switch (subjectIndexNum) {
        case 1:
            subjectName = 'WEB';
            totalStudent = totalStudent1;
            break;
        case 2:
            subjectName = 'JavaScript';
            totalStudent = totalStudent2;
            break;
        case 3:
            subjectName = "SPA";
            totalStudent = totalStudent3;
            break;
    };

    var allOptions = document.querySelectorAll(".resultList");
    allOptions.forEach(function (element) {
        element.classList.add("hiden")
    });

    var resultList = document.querySelector(".list" + this.value);
    resultList.classList.toggle("hiden");
    percent = parseInt(totalStudent[1] / (totalStudent[0] + totalStudent[1]) * 100);
    document.querySelector("#passedNum").textContent = totalStudent[0];
    document.querySelector("#failedNum").textContent = totalStudent[1];
    document.querySelector("#failedPercent").textContent = percent + '%';
    document.querySelector("#total").textContent = ' ' + (totalStudent[0] + totalStudent[1]);
})



document.querySelector(".btn").addEventListener("click", inputData);
document.querySelector("body").addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
        inputData;
    }
})


function inputData() {

    var subjectObject = new Subject(subjectName);

    var nameInput = document.querySelector("#name");
    var gradeInput = document.querySelector("#grade");
    var studentName = nameInput.value;
    var studentGrade = gradeInput.value;

    function validation(studentName, studentGrade) {
        if (studentName == '' || studentGrade == '') {
            return "All data is required"
        } else if (studentGrade > 10 || studentGrade < 1) {
            return "Grade have to be between 1 and 10";
        } else if (studentName.indexOf(' ') == -1) {
            return 'Name and surname are required';
        } else {
            return 'Ok';
        }
    }
    result = validation(studentName, studentGrade);

    if (result != 'Ok') {
        var text = document.createTextNode(result);
        var errorDiv = document.querySelector("#errorText");
        errorDiv.appendChild(text);
    } else {

        position = studentName.indexOf(' ');
        console.log(position);
        var name = studentName.slice(0, position);
        var nameUp = name.charAt(0).toUpperCase() + name.slice(1, name.length);
        var surname = studentName.slice(position + 1, studentName.length);
        var surnameUp = surname.charAt(0).toUpperCase() + surname.slice(1, surname.length);

        var fixedStudentName = nameUp + ' ' + surnameUp;
        var student = new CreateStudent(fixedStudentName, studentGrade);

        subjectObject.addStudent(student);

        var studentText = student.name + ', ' + student.grade;
        var studentResult = student.result;

        var passedList = document.querySelector(".passedList" + subjectIndexSt);
        var failedList = document.querySelector(".failedList" + subjectIndexSt);
        var liStudent = document.createElement("li");
        var textLi = document.createTextNode(studentText);
        liStudent.appendChild(textLi);


        if (studentResult == 'passed') {
            passedList.appendChild(liStudent);
            totalStudent[0] = totalStudent[0] + 1;
        } else {
            failedList.appendChild(liStudent)
            totalStudent[1] = totalStudent[1] + 1;
        };

        percent = parseInt(totalStudent[1] / (totalStudent[0] + totalStudent[1]) * 100);
        document.querySelector("#passedNum").textContent = totalStudent[0];
        document.querySelector("#failedNum").textContent = totalStudent[1];
        document.querySelector("#failedPercent").textContent = percent + '%';
        document.querySelector("#total").textContent = ' ' + (totalStudent[0] + totalStudent[1]);

        nameInput.value = '';
        gradeInput.value = '';
        document.querySelector("#errorText").innerHTML = '';
    }
}