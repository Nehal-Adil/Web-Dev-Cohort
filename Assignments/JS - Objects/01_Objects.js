// Problem Statement

// Imagine you are building an online school management system. Each student has a profile containing their name, age, and grade. You need to store this information in an object format so that it can be accessed easily when required.

// Challenge:-
// Write a function that takes name, age, and grade as parameters and returns a student object containing these properties.

// Constraints

// name should be a string.

// age should be a positive integer greater than 5.

// grade should be a string like “10th”, “12th”, etc.

// return “Invalid input” for wrong inputs.

// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (
    typeof name !== "string" ||
    typeof grade !== "string" ||
    typeof age !== "number" ||
    age <= 5 ||
    name === ""
  ) {
    return "Invalid input";
  }
  return {
    name,
    age,
    grade,
  };
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { name, age, grade } = JSON.parse(input);
  const result = createStudentProfile(name, age, grade);
  process.stdout.write(JSON.stringify(result));
});
