// You've been tasked with designing the perfect shiny diamond rug cursh's room. They love stars, and you've decided to make a sparkling pattem using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond! » 4

// Problem Statement:

// Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The number n represents the size of the diamond, with the middle of the diamond having 2n - 1 stars.

// Important Rules:
// 1.) Each line must not have trailing spaces.
// 2.) The output must not have an extra newline at the end.

// For example:
// For n = 4,the output will look like:

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

function shinyDiamond(n) {
  let pattern = "";

  // Upper part of the diamond
  for (let i = 0; i < n; i++) {
    for (let spaces = 0; spaces < n - i - 1; spaces++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  // Lower part of the diamond
  for (let i = n - 2; i >= 0; i--) {
    for (let spaces = 0; spaces < n - i - 1; spaces++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    if (i > 0) {
      pattern += "\n";
    }
  }

  return pattern;
}

// console.log(shinyDiamond(4));

// You just need to implement the shinyDiamondRug function
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = parseInt(input.trim(), 10); // Get the number input
  const result = shinyDiamondRug(n); // Call our function
  process.stdout.write(result); // Output the result
});
