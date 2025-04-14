// Problem statement
// Create a Library constructor that initializes a books array. Implement:
//      addBook (book): Adds a book to the books array.
//      findBook(title): Searches for a book by title and retumns "Book found” or "Book not found”.

// Challenge
//      Implement Library constructor with a books array.
//      Attach addBook (book) and findBook (title) methods to the prototype.

// Hint 1
//      Use this.books.includes(title) ? "Book found" : "Book not found"; in findBook()

// You need to implement the Library constructor function and its prototype methods

function Library() {
  // Initialize books property
  this.books = [];
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function (book) {
  this.books.push(book);
};

// Define findBook method on Library's prototype
Library.prototype.findBook = function (title) {
  return this.books.includes(title) ? "Book found" : "Book not found";
};

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { books, searchTitle } = JSON.parse(input);
  const library = new Library();

  books.forEach((book) => library.addBook(book));

  process.stdout.write(JSON.stringify(library.findBook(searchTitle)));
});

// Example usage
const myLibrary = new Library(); // Create a new Library instance

myLibrary.addBook("Harry Potter"); // Add a book title
myLibrary.addBook("The Hobbit"); // Add another book title

console.log(myLibrary.findBook("Harry Potter")); // Output: "Book found"
console.log(myLibrary.findBook("Fight Club")); // Output: "Book not found"
