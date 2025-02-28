// You have a pile of gifts, and you want to give each of your friends one gift at a time. You keep giving them gifts until they all get one.

// Problem Statement:

// Write a function to distribute gifts to your friends one by one. It should stop once all your friends have received a gift.

// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  // write your code here
  let result = 0;
  while (totalGifts > 0 && friends > 0) {
    result += 1;
    totalGifts--;
    friends--;
  }
  return result;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { totalGifts, friends } = JSON.parse(input); // Parse input as number
  // Call our function
  const result = distributeGifts(totalGifts, friends);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
