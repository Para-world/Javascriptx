// Example 1: Even or Odd
let num = 7;

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}


//Example 2: Simple Calculator using Switch
let a = 10;
let b = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
}

//Example 3: Print Multiplication Table
let numx = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numx} x ${i} = ${numx * i}`);
}


// Example 4: Sum of First 10 Numbers
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum of first 10 numbers:", sum);


