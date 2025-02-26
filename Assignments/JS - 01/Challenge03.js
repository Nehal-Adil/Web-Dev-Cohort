// You're packing chocolate bars into gift boxes. Each box must contain the same number of chocolate bars. How many chocolate bars do you need for all the boxes?

//Challenge

// Create a function that multiplies two numbers (chocolate bars per box and number of boxes) and returns the total number of chocolate bars needed.

// You just need to implement the totalChocolateBars function
function totalChocolateBars(barsPerBox, numberOfBoxes) {
  // Return barsPerBox multiplied by numberOfBoxes
  return barsPerBox * numberOfBoxes;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain barsPerBox and numberOfBoxes
  const { barsPerBox, numberOfBoxes } = JSON.parse(input);

  // Call our function
  const result = totalChocolateBars(barsPerBox, numberOfBoxes);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
