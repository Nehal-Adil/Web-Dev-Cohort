// You're planning a week's schedule and need to count the days you are working. You have an array where each element represents a day of the week. How can you calculate how many days you are working?

// Problem Statement:

// Create a function that takes an array of days (e.g., [ “Monday”, “Tuesday”, "Friday”]) and returns the number of days you're working. “Saturday” and "Sunday" are not working days.

// You just need to implement the workingDays function
function workingDays(days) {
  // your code here
  let workDays = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] == "Sunday" || days[i] == "Saturday") {
      continue;
    }
    workDays++;
  }
  return workDays;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be a JSON string array of days)
  const days = JSON.parse(input);

  // Call our function
  const result = workingDays(days);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
