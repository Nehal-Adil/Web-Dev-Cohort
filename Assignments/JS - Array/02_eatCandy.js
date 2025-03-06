// You have a jar full of candies, but your little sibling keeps eating the last one! Your job is to remove the last candy from the jar.

// Problem Statement: Create a function that removes the last candy from the jar and returns the updated jar.

// # Hint1 ~
// Think of a method that removes the last element of an array.

// You just need to implement the eatCandy function
function eatCandy(candyJar) {
  // Remove the last candy from the jar and return the updated jar
  candyJar.pop();
  return candyJar;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain candyJar
  const { candyJar } = JSON.parse(input);

  // Call our function
  const result = eatCandy(candyJar);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
