// You are organizing a party and have a list of invited guests. But just before the party starts, a new friend decides to join. You need to add them to the guest list.

// Problem Statement: Create a function that adds a new guest list and returns the updated list.

function addGuest(guestList, newGuest) {
  guestList.push(newGuest);
  return guestList;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain guestList and newGuest
  const { guestList, newGuest } = JSON.parse(input);

  // Call our function
  const result = addGuest(guestList, newGuest);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
