// Create a basic calculator that performs + - *, / based on user input.
// Problem Statement:
// Write a function that uses switch-case to perform arithmetic operations. Handle the edge case of “Cannot divide by zero".

function calculator(num1, num2, operator) {
  // Perform basic arithmetic operations using switch case
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    if (num2 == 0) {
      return "Cannot divide by zero";
    } else {
      return num1 / num2;
    }
  } else {
    return "Invalid operator";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { num1, num2, operator } = JSON.parse(input);
  const result = calculator(num1, num2, operator);
  process.stdout.write(JSON.stringify(result));
});
