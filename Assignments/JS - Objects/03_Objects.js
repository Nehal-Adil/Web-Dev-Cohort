// Problem Statement
// You are building an online shopping platform. Some products have discounts, and some don't. You need to check whether a product object contains a discount property.

// Challenge
// Write a function that checks if a product object has a discount property and returns true or false.

// Constraints
//  product should be a valid object.

// You just need to implement the hasDiscount function
function hasDiscount(product) {
  // Check if product has discount property
  if (typeof product !== "object" || !product.name || !product.price) {
    return "Invalid object";
  }

  if (!product.discount) {
    return false;
  }
  return true;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { product } = JSON.parse(input);
  const result = hasDiscount(product);
  process.stdout.write(JSON.stringify(result));
});
