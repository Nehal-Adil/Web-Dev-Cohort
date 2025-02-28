// You're tracking the number of steps you take during a workout. Each time you take a step, you want to count it. You keep stepping until you've reached a certain number of steps.

// Problem Statement:

// Create a function that uses a loop to count the number of steps during a workout. The loop should continue until you reach the target step count.

// You just need to implement the countSteps function
function countSteps(targetSteps) {
  let steps = 0;
  while (steps != targetSteps) {
    steps++;
  }
  return steps;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const targetSteps = parseInt(input); // Parse input as number
  // Call our function
  const result = countSteps(targetSteps);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
