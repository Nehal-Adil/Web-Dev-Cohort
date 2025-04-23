// Problem Statement
// You are developing a car rental service. Each car has a brand and model, but some cars don't have a color assigned yet. You need to add a color property dynamically when a customer selects a car.

// Challenge
// Write a function that takes a car object and a color string, then adds the color property to the object.

// Constraints
//  car should be a valid object with at least brand and model properties.
//  color should be a non-empty string, otherwise return “Invalid color”.

// You just need to implement the addCarColor function
function addCarColor(car, color) {
  if (typeof car !== "object" || car === null || !car.brand || !car.model) {
    return "Invalid car object";
  }

  if (typeof color !== "string" || color.trim() === "") {
    return "Invalid color";
  }

  car.color = color;
  return car;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { car, color } = JSON.parse(input);
  const result = addCarColor(car, color);
  process.stdout.write(JSON.stringify(result));
});
