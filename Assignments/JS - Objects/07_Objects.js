// Problem Statement
// You are working on a system that stores product details in an object. However, for some functionalities, the data needs to be in an array format.

// Challenge
// Write a function that converts an object into an array of key-value pairs. Each element in the array should be an array where the first item is the key and the second item is the value.

// Constraints
// « The input should be a valid object.
// « If the object is empty, return an empty array.

// You just need to implement the objectToArray function
function objectToArray(obj) {
  if (typeof obj !== "object") {
    return "Invalid object";
  }

  if (obj == {}) {
    return [];
  }

  // Convert the object into an array of key-value pairs

  const myValues = Object.entries(obj);
  return myValues;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { obj } = JSON.parse(input);
  const result = objectToArray(obj);
  process.stdout.write(JSON.stringify(result));
});
