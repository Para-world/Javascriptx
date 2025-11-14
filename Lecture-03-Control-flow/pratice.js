let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
  console.log("Positive number");
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
