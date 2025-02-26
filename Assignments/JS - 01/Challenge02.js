// You have a basket of apples, but you decide to give some away to your neighbor. How many apples are left in your basket?
// Write a function that subtracts the number of apples given away from the total apples you started with, then returns the remaining apples.

// Your code starts here
// You just need to implement the remainingApples function
function remainingApples(totalApples, givenAway) {
  // Return totalApples minus givenAway
  return totalApples - givenAway;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain totalApples and givenAway
  const { totalApples, givenAway } = JSON.parse(input);

  // Call our function
  const result = remainingApples(totalApples, givenAway);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
