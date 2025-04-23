// Problem Statement
// You are analyzing user data in a database. You need to count how many properties exist in a user's profile to determine if the profile is complete.

// Challenge
// Write a function that retums the number of properties in an object.

// Constraints
//   user should be a valid object.
//   If the object is empty, return 0.

// You just need to implement the countProperties function
function countProperties(user) {
  // Return the number of properties in user
  if (typeof user !== "object") {
    return "Invalid Object";
  }

  return Object.keys(user).length;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { user } = JSON.parse(input);
  const result = countProperties(user);
  process.stdout.write(JSON.stringify(result));
});
