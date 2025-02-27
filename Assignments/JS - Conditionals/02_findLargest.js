// You are given three numbers. Determine the largest among them.
// Problem Statement:
// Write a function that takes three numbers and returns the largest using if-else.

function findLargest(a, b, c) {
  // Return the largest among a, b, and c
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    return b;
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { a, b, c } = JSON.parse(input);
  const result = findLargest(a, b, c);
  process.stdout.write(JSON.stringify(result));
});
