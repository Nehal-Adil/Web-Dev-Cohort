// A school bus has students inside, but the first student in line needs to get off at the next stop. Remove the first student from the bus.

// Problem Statement: Create a function that removes the first student from the bus and returns the updated list.

// You just need to implement the removeStudent function
function removeStudent(bus) {
  // Remove the first student and return the updated bus list
  bus.shift();
  return bus;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain bus
  const { bus } = JSON.parse(input);

  // Call our function
  const result = removeStudent(bus);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
