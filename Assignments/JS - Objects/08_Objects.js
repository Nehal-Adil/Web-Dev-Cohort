// Problem Statement
// In your web application, some objects contain unnecessary properties. To optimize performance, you need to remove all properties that have null or undefined values.

// Challenge
// Write a function that removes all properties with null or undefined values from an object.

// Constraints
// « The input should be a valid object.
// « If the object has no valid properties left, return {}.

// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  if (typeof obj !== "object" || obj == null) {
    return {};
  }
  const vals = Object.entries(obj);
  const updatedVals = vals.filter(
    ([key, value]) => value !== null && value !== undefined
  );
  //   console.log(updatedVals);

  return Object.fromEntries(updatedVals);
}

// --------- Another Method ----------------
function cleanObject_02(obj) {
  let cleanedObj = {};

  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      cleanedObj[key] = obj[key];
    }
  }
  return cleanedObj;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { obj } = JSON.parse(input);
  const result = cleanObject(obj);
  process.stdout.write(JSON.stringify(result));
});

// const obj1 = {
//   name: "Alice",
//   age: null,
//   email: undefined,
// };
// console.log(cleanObject_02(obj1));
