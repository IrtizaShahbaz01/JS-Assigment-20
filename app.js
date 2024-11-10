// Signup form submission and display
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    document.getElementById('output').textContent = `Username: ${username}, Email: ${email}, Password: ${password}`;
});

// Read More toggle functionality
document.getElementById('readMoreBtn').addEventListener('click', function () {
    let fullContent = document.getElementById('fullContent');
    if (fullContent.style.display === "none") {
        fullContent.style.display = "block";
        this.textContent = "Read Less";
    } else {
        fullContent.style.display = "none";
        this.textContent = "Read More";
    }
});

// Student form to add, edit, and delete rows
const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
let editIndex = null;

studentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let grade = document.getElementById('grade').value;

    let newRow = studentTable.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = age;
    newRow.insertCell(2).textContent = grade;

    let actions = newRow.insertCell(3);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        studentTable.deleteRow(newRow.rowIndex - 1);
    });

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function () {
        document.getElementById('editForm').style.display = 'block';
        editIndex = newRow.rowIndex - 1;
        document.getElementById('editName').value = name;
        document.getElementById('editAge').value = age;
        document.getElementById('editGrade').value = grade;
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    studentForm.reset();
});

// Edit student form functionality
const editStudentForm = document.getElementById('editStudentForm');
editStudentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('editName').value;
    let age = document.getElementById('editAge').value;
    let grade = document.getElementById('editGrade').value;

    studentTable.rows[editIndex].cells[0].textContent = name;
    studentTable.rows[editIndex].cells[1].textContent = age;
    studentTable.rows[editIndex].cells[2].textContent = grade;

    document.getElementById('editForm').style.display = 'none';
});