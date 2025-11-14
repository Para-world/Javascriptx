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


