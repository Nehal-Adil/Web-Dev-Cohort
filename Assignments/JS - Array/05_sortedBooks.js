// ‘Your bookshelf is a mess! You need to arrange the books in alphabetical order.

// Problem Statement: Create a function that sorts the books alphabetically and returns the updated list.

// You just need to implement the sortBooks function
function sortBooks(books) {
  // Sort the books alphabetically and return the updated list
  books.sort();
  return books;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain books
  const { books } = JSON.parse(input);

  // Call our function
  const result = sortBooks(books);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
