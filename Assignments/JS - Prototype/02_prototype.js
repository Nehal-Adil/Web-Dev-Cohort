// Problem statement

// You are designing a simple robot system. Each robot has a name and a batteryLevel. The robot should have a method charge () that increases the battery level by 20, but it cannot exceed 100.

// Challenge

// Implement a constructor function Robot that initializes name and bat teryLevel.
// Attach a method charge () to its prototype that increases batterylLevel by 20, ensuring it does not go above 100.

// # Hint ~
// Use Math.min(this.batteryLevel + 20, 100); inside charge().

// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  this.name = name;
  this.batteryLevel = batteryLevel;
}

Robot.prototype.charge = function () {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
};

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { name, batteryLevel } = JSON.parse(input);
  const robot = new Robot(name, batteryLevel);
  robot.charge();
  process.stdout.write(JSON.stringify(robot.batteryLevel));
});
