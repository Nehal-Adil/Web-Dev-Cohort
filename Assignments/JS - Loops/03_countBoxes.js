// You're packing chocolate bars into gift boxes. Each box needs to have the same number of chocolate bars. You need to find out how many boxes of chocolates you'll have after packing the bars.

// Problem Statement:

// Create a function that counts how many boxes you need based on the total number of chocolate bars and the number of chocolate bars per box, using a loop.

// # Hint1
// You can use division to calculate how many full boxes of chocolate bars you can make. Consider using a loop to simulate the packing process and check if any bars are left over.

// You just need to implement the countBoxes function
function countBoxes(totalBars, barsPerBox) {
  let boxNeeded = 0;
  while (totalBars > 0 && totalBars >= barsPerBox) {
    totalBars -= barsPerBox;
    boxNeeded++;
  }
  return boxNeeded;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { totalBars, barsPerBox } = JSON.parse(input); // Parse input as number
  // Call our function
  const result = countBoxes(totalBars, barsPerBox);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
