// You're preparing for a picnic and need to fill several water bottles. Each bottle requires a different amount of water, but you're going to fill them one by one. How do you track the amount of water you're adding to each bottle?

// Problem Statement:

// Create a function that takes an array of water amounts (in liters) for each bottle and adds them up. The function should return the total amount of water you've filled in all the bottles.

// # Hint1 ~
// Use a loop to go through each element in the array of water amounts and add each one to the total. Don't forget to initialize the total as 0 at the start.

// You just need to implement the totalWater function
function totalWater(waterAmounts) {
  let sum = 0;
  for (let i = 0; i < waterAmounts.length; i++) {
    sum += waterAmounts[i];
  }
  return sum;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be a JSON string array of water amounts)
  const waterAmounts = JSON.parse(input);

  // Call our function
  const result = totalWater(waterAmounts);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
