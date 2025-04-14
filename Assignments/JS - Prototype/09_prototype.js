// Problem statement

// You are building a banking system where multiple bank accounts can exist. Each account has an accountNumber, holderName, and balance. Implement the following methods:
//      deposit (amount): Adds money to the balance.
//      withdraw(amount): Deducts money but prevents overdraft.
//      transfer(amount, targetAccount): Transfers money from one account to another if the balance allows it.

// Challenge
// « Implement BankAccount constructor with accountNumber, holderName, and balance.
// « Attach deposit (amount), withdraw(amount), and transfer (amount, targetAccount) methods to the
// prototype.

// # Hint1
// Use if (this.balance >= amount) this.balance -= amount; inside withdraw() and transfer() methods

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    return;
  } else {
    this.balance -= amount;
  }
};

// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer = function (amount, targetAccount) {
  if (amount > this.balance) {
    return;
  } else {
    this.balance -= amount;
    targetAccount.balance += amount;
  }
};

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { accounts, transaction } = JSON.parse(input);

  const acc1 = new BankAccount(
    accounts[0].accountNumber,
    accounts[0].holderName,
    accounts[0].balance
  );
  const acc2 = new BankAccount(
    accounts[1].accountNumber,
    accounts[1].holderName,
    accounts[1].balance
  );

  if (transaction.type === "deposit") {
    acc1.deposit(transaction.amount);
  } else if (transaction.type === "withdraw") {
    acc1.withdraw(transaction.amount);
  } else if (transaction.type === "transfer") {
    acc1.transfer(transaction.amount, acc2);
  }

  process.stdout.write(JSON.stringify([acc1.balance, acc2.balance]));
});
