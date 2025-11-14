// Example 1: Simple Calculator (Using Functions)
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 5, "*")); 


// Example 2: Temperature Converter
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(25));


//Example 3: Arrow Function Practice
const greet = (name) => `Hello ${name}, welcome back!`;
console.log(greet("Deepak"));


//Example 4: Function Calling Another Function
function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}

function processNumbers(x) {
  console.log("Double:", double(x));
  console.log("Triple:", triple(x));
}

processNumbers(5);
