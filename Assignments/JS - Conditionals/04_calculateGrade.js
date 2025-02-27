// Given a student's marks, determine their grade based on this scale:

// -90+ A

// -8089-8

// -7079—C

// -6069—D

// -Below 60 — F

// Problem Statement:
// Wite a function that returns the corresponding grade using if-else.

function calculateGrade(marks) {
  // Return grade based on the marks
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80 && marks < 90) {
    return "B";
  } else if (marks >= 70 && marks < 80) {
    return "C";
  } else if (marks >= 60 && marks < 70) {
    return "D";
  } else if (marks < 60) {
    return "F";
  } else {
    return "Invalid option";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { marks } = JSON.parse(input);
  const result = calculateGrade(marks);
  process.stdout.write(JSON.stringify(result));
});
