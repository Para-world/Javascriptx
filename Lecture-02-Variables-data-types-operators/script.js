// var     // old, not recommended
// let     // modern and block-scoped
// const   // constant (cannot be reassigned)

let name = "Deepak";
const pi = 3.14;
var age = 18;

// Data Types in JavaScript
// Primitive Types:
String;
Number;
Boolean;
undefined;
null;
BigInt;
Symbol;
//Reference Types (Objects):
Object;
Array;
Function;

let namex = "Deepak";
console.log(typeof namex); // string

let agex = 19;
console.log(typeof agex); // number

//Operators in JavaScript
//Arithmetic Operators
// +
// -
// *
// /
// %
// **

let x = 10;
let y = 3;
console.log(x + y); // 13
console.log(x % y); // 1

//Comparison Operators
//==
//===
//!=
//>
//<

//Logical Operators
//&&
//`
//!

// Example 1: Variable Declaration and Output
let namey = "Deepak";
let agey = 21;
console.log("My name is " + namey + " and I am " + agey + " years old.");

// Example 2: Arithmetic Operations
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// Example 3: Comparison and Logical Operators
let f = 10;
let g = "10";

console.log(f == g);  // true (same value)
console.log(f === g); // false (different type)
console.log(f > 5 && g == 10); // true
console.log(!(x < 5)); // true


// Example 4: Type Checking
let price = 99.99;
let available = true;
let color;

console.log(typeof price);     // number
console.log(typeof available); // boolean
console.log(typeof color);     // undefined

//Example 5: Constant Example
const PI = 3.14159;
console.log("Value of PI:", PI);


// var namem = prompt("Enter your name:");
var namem = Date();
var namel = window.location;

let calcNum1 = 20;
let calcNum2 = 8;
let calcOperator = "*";
let calcResult;

if (calcOperator === "+") {
  calcResult = calcNum1 + calcNum2;
} else if (calcOperator === "-") {
  calcResult = calcNum1 - calcNum2;
} else if (calcOperator === "*") {
  calcResult = calcNum1 * calcNum2;
} else if (calcOperator === "/") {
  calcResult = calcNum1 / calcNum2;
} else if (calcOperator === "%") {
  calcResult = calcNum1 % calcNum2;
} else {
  console.log("Invalid operator for calculator");
}

console.log(`Calculator: ${calcNum1} ${calcOperator} ${calcNum2} = ${calcResult}`);

let userAgeValue = 21;
let ageCategory;

if (userAgeValue < 13) {
  ageCategory = "Child";
} else if (userAgeValue < 20) {
  ageCategory = "Teen";
} else if (userAgeValue < 60) {
  ageCategory = "Adult";
} else {
  ageCategory = "Senior";
}

console.log(`Age: ${userAgeValue}, Category: ${ageCategory}`);

// --- Advanced Notes (for professionals) ---
// - Understand implicit type coercion:  "5" - 1 === 4 but "5" + 1 === "51".
// - Always prefer === over == to avoid surprising coercion, except in very specific controlled cases.
// - Be aware of special values like NaN and how Number(), parseInt() and Boolean() convert different inputs.

// --- Exercises ---
// 1. Write a function logEquality(a, b) that logs results of both a == b and a === b for several tricky cases.
// 2. Implement a safeParseInt(value, defaultValue) that returns defaultValue when parseInt fails (NaN).
// 3. Create a function classifyValue(v) that logs its typeof, truthiness, and whether it is NaN.
