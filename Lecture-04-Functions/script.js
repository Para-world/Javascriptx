//A function is a block of code designed to perform a specific task.
//Example:
function greet() {
    console.log("Hello!");
}

greet();


//Function Syntax
function functionName(parameters) {
  // Code to be executed
}

//Example:
function add(a, b) {
  console.log(a + b);
}

add(5, 10); 

//Function with Return Value
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 3);
console.log("Result:", result);


//Note: return immediately stops the function and sends a value back.


//Function Parameters and Arguments
// Parameters are placeholders in the function definition.

// Arguments are actual values you pass when calling the function.


//Example:
function greetUser(name) {
  console.log("Hello " + name + "!");
}

greetUser("Deepak"); 

//Default Parameters
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();         
greet("Deepak"); 

//Function Expressions
const square = function(num) {
  return num * num;
};

console.log(square(5)); 

//Arrow Functions (Modern ES6)
const add = (a, b) => a + b;

console.log(add(10, 5)); 


// If your function has one parameter:
const greet = name => console.log("Hello, " + name);
greet("Deepak");


//Scope in JavaScript

// Global Scope	Variables declared outside any function
// Local Scope	Variables declared inside a function
// Block Scope (ES6)	Variables declared inside {} using let or const


//Example:

let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();
console.log(globalVar); // Accessible
// console.log(localVar); ❌ Error: not defined


//Nested Functions
function outer() {
  let outerVar = "Outer variable";

  function inner() {
    console.log("Accessing:", outerVar);
  }

  inner();
}

outer();

// --- Advanced Notes (for professionals) ---
// - Function declarations are hoisted, while function expressions and arrow functions are not.
// - Prefer pure functions (no side effects) when possible; they are easier to test and reuse.
// - Arrow functions capture this lexically and are usually not suitable as methods on objects that rely on this.

// --- Exercises ---
// 1. Convert some of the existing examples to pure functions that return values instead of logging directly.
// 2. Implement a compose(f, g) helper that returns a new function x => f(g(x)) and use it with simple math functions.
// 3. Write a function makeLogger(prefix) that returns a function logging with that prefix, using closures.
