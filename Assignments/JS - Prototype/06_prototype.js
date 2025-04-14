// Problem statement

// Create a BankAccount constructor that initializes:
//  A balance property representing the account balance.
//  Atransactions array to log all deposit and withdrawal activities.

// Implement the following methods on the prototype:

// 1. deposit (amount):
//  Increases the balance by the given amount.
//  Adds a transaction log in the format: "Deposited x" (where X is the amount). .

// 2. withdraw(amount):
//  Decreases the balance by the given amount.
//  Prevents overdraft (cannot withdraw if balance is insufficient).
//  If withdrawal is successful, log: "withdrew X".
//  If balance is insufficient, log: "Insufficient balance”.

// 3. getTransactionHistory():
//  Returns the list of all transactions as an array of strings in the order they occurred.

// Challenge
//  Implement BankAccount constructor with balance and transactions. (
//  Attach deposit (amount), withdraw(amount), and getTransactionHistory() methods to the prototype.

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
  // Initialize balance and transactions properties
  this.balance = balance || 0;
  this.transactions = [];
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
};
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    this.transactions.push("Insufficient balance");
  } else {
    this.balance -= amount;
    this.transactions.push(`Withdrew ${amount}`);
  }
};
// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions;
};
// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { balance, transactions } = JSON.parse(input);
  const account = new BankAccount(balance);

  transactions.forEach(({ type, amount }) => {
    if (type === "deposit") account.deposit(amount);
    if (type === "withdraw") account.withdraw(amount);
  });

  process.stdout.write(JSON.stringify(account.getTransactionHistory()));
});
