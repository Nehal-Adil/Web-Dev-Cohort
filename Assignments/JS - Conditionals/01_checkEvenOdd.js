// You are organizing a party and have a lst of invited guests. But just before the party starts, a new friend decides to join. You need to add them to the guest lst.
// Problem Statement: Create a function that adds a new guest to the guest list and returns the updated list.

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { num } = JSON.parse(input);
  const result = checkEvenOdd(num);
  process.stdout.write(JSON.stringify(result));
});
