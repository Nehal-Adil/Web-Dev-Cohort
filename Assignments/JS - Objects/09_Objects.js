// Problem Statement
// You are working on a web application where objects contain nested properties. JavaScripts built-in assignment (=) creates a shallow copy, meaning changes to the copied object will also affect the original. To prevent this, you need to create a deep copy of an object, ensuring that nested objects are also cloned properly.

// Challenge
// Write a function that takes an object and retums a deep copy of it.

// Constraints
// « The input should be a valid object.
// « The function should work with nested objects and arrays inside objects.
// « The function should not modify the original object

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj1 = {
  name: "Alice",
  hobbies: ["Drawing", "Singing", "Cleaning"],
  vehichles: {
    two_Wheel: {
      brand: "Suzuki",
      color: "ref",
    },
    four_Wheel: {
      brand: "Honda",
      color: "Black",
    },
  },
};

const obj2 = deepClone(obj1);
obj2.vehichles.four_Wheel.color = "Orange";
console.log("Obj2:", obj2);
console.log("Obj1:", obj1);
