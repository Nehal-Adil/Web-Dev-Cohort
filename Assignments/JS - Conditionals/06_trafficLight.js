//You need to determine what action to take based on traffic light colors:
// - Red --> Stop
// + Yellow” --> Slow Down
// + Green” --> Go
// + Blue” —-> Invalid Color

// Problem Statement:
// Write a function that uses switch-case to retum the correct action.

function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  switch (color.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Invalid Color";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { color } = JSON.parse(input);
  const result = trafficLightAction(color);
  process.stdout.write(JSON.stringify(result));
});
