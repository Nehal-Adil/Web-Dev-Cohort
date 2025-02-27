// Given a temperature and a scale ('C or °F), convert it to the other scale.

// Problem Statement:

// Write a function that uses switch-case to convert temperature.

function convertTemperature(value, scale) {
  // Convert temperature based on the scale ("C" to "F" or "F" to "C")
  if (scale == "C") {
    const temp = value * (9 / 5) + 32;
    return temp + "°F";
  } else {
    const temp = ((value - 32) * 5) / 9;
    return temp + "°C";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { value, scale } = JSON.parse(input);
  const result = convertTemperature(value, scale);
  process.stdout.write(JSON.stringify(result));
});
