//if Statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}


//if...else Statement
let agex = 16;

if (agex >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}



//if...else if...else Statement
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Ternary Operator (Short Form of if/else)
let agey = 20;
let message = agey >= 18 ? "Adult" : "Minor";
console.log(message);

//Switch Statement
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Second day of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day");
}

//Loops — Repeating Tasks
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}


//while Loop
let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}


//do...while Loop
let num = 5;
do {
  console.log("Running...");
  num++;
} while (num < 5);


//for...of Loop (for arrays)
let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}


//for...in Loop (for objects)
let person = { name: "Deepak", age: 21, city: "Delhi" };

for (let key in person) {
  console.log(key + ":", person[key]);
}


//Loop Control Statements
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log(i);
}

let secretNumber = Math.floor(Math.random() * 20) + 1;
let maxAttempts = 5;
let attempt = 1;

while (attempt <= maxAttempts) {
  let guessInput = prompt("Guess a number between 1 and 20. Attempt " + attempt + " of " + maxAttempts + ":");
  let guess = parseInt(guessInput, 10);

  if (isNaN(guess)) {
    console.log("Please enter a valid number.");
  } else if (guess === secretNumber) {
    console.log("Correct! You guessed the number in", attempt, "attempt(s).");
    break;
  } else if (guess < secretNumber) {
    console.log("Too low.");
  } else if (guess > secretNumber) {
    console.log("Too high.");
  }

  attempt++;
}

if (attempt > maxAttempts) {
  console.log("Out of attempts. The secret number was", secretNumber);
}

// --- Advanced Notes (for professionals) ---
// - Prefer early returns ("guard clauses") instead of deeply nested if/else blocks to keep code flat and readable.
// - Think about input validation as part of control flow: never trust prompt/user input without checking it.
// - Loops combined with break/continue can often be replaced with array methods (some, every, find) for clarity.

// --- Exercises ---
// 1. Refactor the grade calculation into a function getGrade(marks) and write tests for boundary values.
// 2. Rewrite the guessing game using a for loop instead of while, keeping the same behavior.
// 3. Implement a small menu system using switch that handles at least 4 commands (e.g., add, list, update, exit).
