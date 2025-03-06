// You have a list of food items, but you want to keep only the healthy ones. Remove all items that contain “Burger”.

// Problem statement: Create a function that removes unhealthy food items (those containing "Burger”) and returns the updated list.

// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
  // Remove unhealthy food and return updated list
  const healthy = foodList.filter((food) => !(food == "Burger"));
  return healthy;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain foodList
  const { foodList } = JSON.parse(input);

  // Call our function
  const result = filterHealthy(foodList);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
