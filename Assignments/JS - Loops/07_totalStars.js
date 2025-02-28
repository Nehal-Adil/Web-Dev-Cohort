// You have multiple levels of stars to count. Each level contains a certain number of stars. How many total stars are there?

// Problem Statement

// Create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number of stars.

// Hint1
// Use a nested loop to first iterate through each level and then sum the number of stars in that level.

// You just need to implement the totalStars function
function totalStars(starLevels) {
  let totalStars = 0;

  for (let i = 0; i < starLevels.length; i++) {
    for (let j = 0; j < starLevels[i].length; j++) {
      totalStars++;
    }
  }
  return totalStars;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be a JSON string array of star levels)
  const starLevels = JSON.parse(input);

  // Call our function
  const result = totalStars(starLevels);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
