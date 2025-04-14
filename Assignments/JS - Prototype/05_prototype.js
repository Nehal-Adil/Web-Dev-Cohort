// Problem statement
// Create a Shopping Cart system where items can be added with a price. Implement a method getTotalPrice() that calculates the total price of all items in the cart.

// Challenge
// Implement a constructor function ShoppingcCart that initializes an empty items array.
// Attach addItem(price) to the prototype to add items.
// Attach getTotalprice() to calculate the total price of items.

// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
  // Initialize items property
  this.items = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
  this.items.push(price);
};

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
  return this.items.reduce((total, price) => total + price, 0);
};

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { prices } = JSON.parse(input);
  const cart = new ShoppingCart();

  for (let price of prices) {
    cart.addItem(price);
  }

  process.stdout.write(JSON.stringify(cart.getTotalPrice()));
});

// Example usage:
const cart = new ShoppingCart();
cart.addItem(10);
cart.addItem(20);
cart.addItem(30);

console.log(cart.getTotalPrice());
