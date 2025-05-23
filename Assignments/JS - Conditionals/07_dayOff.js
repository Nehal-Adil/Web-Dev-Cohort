//Given a number (1-7), return the corresponding day of the week.

// Problem Statement:
// Write a function that uses switch-case to return the day name for valid inputs otherwise “invalid Day”.

function getDayOfWeek(day) {
  // Return the corresponding day of the week based on the input number
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid Day";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { day } = JSON.parse(input);
  const result = getDayOfWeek(day);
  process.stdout.write(JSON.stringify(result));
});
