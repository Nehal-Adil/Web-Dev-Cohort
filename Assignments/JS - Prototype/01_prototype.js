// You need to create a constructor function Animal that takes a name parameter. Add a method makeSound to its prototype, which always returns “Some generic sound”.

// Challenge

// Implement a constructor function Animal that initializes the name property.

// Attach a method makeSound to its prototype that returns "Some generic sound”.

// You need to implement the Animal constructor function and its prototype method
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { name } = JSON.parse(input);
  const animal = new Animal(name);
  process.stdout.write(JSON.stringify(animal.makeSound()));
});
