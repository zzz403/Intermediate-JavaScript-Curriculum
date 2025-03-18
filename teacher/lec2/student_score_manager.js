// Student Score Manager JavaScript

let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value.trim();
    let score = parseInt(document.getElementById("studentScore").value);

    if (name === "" || isNaN(score)) {
        alert("Please enter a valid name and score.");
        return;
    }

    students.push({ name: name, score: score });
    updateStudentList();
}

function removeStudent() {
    let name = document.getElementById("studentName").value.trim();
    students = students.filter(student => student.name.toLowerCase() !== name.toLowerCase());
    updateStudentList();
}

function showHighScorers() {
    let highScorers = students.filter(student => student.score > 85);
    let output = highScorers.map(s => `${s.name} - ${s.score}`).join("\n");
    document.getElementById("studentList").textContent = output || "No high scorers found.";
}

function updateStudentList() {
    let output = students.map(s => `${s.name} - ${s.score}`).join("\n");
    document.getElementById("studentList").textContent = output || "No students added yet.";
}

document.getElementById("addStudent").addEventListener("click", addStudent);
document.getElementById("removeStudent").addEventListener("click", removeStudent);
document.getElementById("showHighScorers").addEventListener("click", showHighScorers);
