// Problem Statement
// For security reasons, when a user logs out, their password should be removed from the user object before storing it in logs or analytics.

// Challenge
// Write a function that removes the password property from a user object and returns the updated object.

// Constraints
//  user should be a valid object with at least a username and password.
//  If password does not exist, return the object as it is.

// You just need to implement the removePassword function
function removePassword(user) {
  if (typeof user !== "object" || !user.username || !user.password) {
    return "Invalid object";
  }

  // Remove password property

  user.password = undefined;

  return user;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { user } = JSON.parse(input);
  const result = removePassword(user);
  process.stdout.write(JSON.stringify(result));
});
