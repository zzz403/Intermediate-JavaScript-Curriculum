// Student Score Manager JavaScript

let students = [];

function addStudent() {
    // TODO: Student need to complete this function to add a student object to the array
}

function removeStudent() {
    // TODO: Student need to complete this function to remove a student object from the array
}

function showHighScorers() {
    // TODO：Student need to complete this function to show high scorers
}

function updateStudentList() {
    //TODO: Student need to complete this function to update the student list
}

function getName() {
    return document.getElementById("studentName").value.trim();
}

function getScore() {
    return parseInt(document.getElementById("studentScore").value);
}

function putOnScreen(String) {
    document.getElementById("studentList").textContent = String;
}

document.getElementById("addStudent").addEventListener("click", addStudent);
document.getElementById("removeStudent").addEventListener("click", removeStudent);
document.getElementById("showHighScorers").addEventListener("click", showHighScorers);
