// Determine if a number is positive, negative, or zero.
// Problem Statement:
// Write a function that uses if-else to classify a number.

function checkNumberType(num) {
  // Return "Positive", "Negative", or "Zero" based on the input number
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { num } = JSON.parse(input);
  const result = checkNumberType(num);
  process.stdout.write(JSON.stringify(result));
});
