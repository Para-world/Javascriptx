// Mini Project: Student Management System (Console-based)

// This project uses only concepts learned so far:
// - Variables & Data Types
// - Operators
// - Control Flow (if/else, for loops)
// - Functions
// - Arrays
// - Objects

// --- Data ---
// We'll use an array to store our student objects.
const students = [
    {
        id: 1,
        name: "Alice",
        age: 20,
        grade: "A"
    },
    {
        id: 2,
        name: "Bob",
        age: 22,
        grade: "B"
    }
];

// --- Functions ---

// 1. Function to display all students
function displayAllStudents() {
    console.log("--- All Students ---");
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
    }
    console.log("--------------------");
}

// 2. Function to add a new student
function addStudent(name, age, grade) {
    // Create a new student object
    const newStudent = {
        id: students.length + 1, // Simple way to generate a new ID
        name: name,
        age: age,
        grade: grade
    };
    // Add the new student to our array
    students.push(newStudent);
    console.log(`Student "${name}" added successfully.`);
}

// 3. Function to find a student by name
function findStudentByName(name) {
    console.log(`--- Searching for student: ${name} ---`);
    let foundStudent = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === name.toLowerCase()) {
            foundStudent = students[i];
            break; // Stop the loop once we find the student
        }
    }

    if (foundStudent) {
        console.log(`Found student: ID: ${foundStudent.id}, Name: ${foundStudent.name}, Grade: ${foundStudent.grade}`);
    } else {
        console.log(`Student "${name}" not found.`);
    }
    console.log("---------------------------------");
}

// 4. Function to update a student's grade
function updateGrade(studentId, newGrade) {
    let studentFound = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students[i].grade = newGrade;
            studentFound = true;
            console.log(`Updated grade for student ID ${studentId} to "${newGrade}".`);
            break;
        }
    }
    if (!studentFound) {
        console.log(`Student with ID ${studentId} not found.`);
    }
}


// --- Running the System ---
// This is where we'll call our functions to simulate using the system.

console.log("Welcome to the Student Management System!");

// Display initial list of students
displayAllStudents();

// Add a new student
addStudent("Charlie", 21, "C");

// Display all students again to see the new addition
displayAllStudents();

// Find a student
findStudentByName("Alice");
findStudentByName("David"); // A student who doesn't exist

// Update a student's grade
updateGrade(2, "A+"); // Update Bob's grade

// Display all students one last time
displayAllStudents();
