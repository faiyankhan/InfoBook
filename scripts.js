const students = [];

function loadStudents() {
    const studentsContainer = document.getElementById("students-list");
    studentsContainer.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        studentsContainer.innerHTML += `<div class='students-card'> ${i + 1}. ${students[i]} </div>`;
    };
};
loadStudents();

const studentInput = document.getElementById("student-name");

function addStudent() {
    students.push(studentInput.value);
    studentInput.value = "";
    loadStudents();
}