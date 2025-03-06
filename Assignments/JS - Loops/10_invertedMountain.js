// You're on a camping trip with your friends, and you all want to set up a starry mountain as a symbol of your adventure. To make things more fun, you decide to use stars to draw an inverted mountain pattern. The challenge: print it so everyone can admire the majestic mountain shape! % #

// Problem Statement:

// Create a function invertedMountain(n) that prints an inverted mountain made of stars. The number n represents the number of stars at the top, and the pattern should reduce by one star each line until only one star is left at the bottom.

//For example:
// - For n = 4,the output will look like:
// ****
// ***
// **
// *

// # Hint1 A
// When you want to print multiple lines, you can use '\n' to add a new line after each row of stars. This will help you keep the output organized and align it properly!

function invertedMountain(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      pattern += "*";
    }
    if (i < n - 1) {
      pattern += "\n";
    }
  }
  return pattern;
}

// You just need to implement the invertedMountain function
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = parseInt(input.trim(), 10); // Get the number input
  const result = invertedMountain(n); // Call our function
  process.stdout.write(result); // Output the result
});
