// Aleap years divisible by 4, but not by 100 unless also divisible by 400.
// Problem Statement:
// Write a function to check if a year is a leap year.

function isLeapYear(year) {
  // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return "Leap Year";
      } else {
        return "Not a Leap Year";
      }
    }
    return "Leap Year";
  }
  return "Not a Leap Year";
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { year } = JSON.parse(input);
  const result = isLeapYear(year);
  process.stdout.write(JSON.stringify(result));
});
