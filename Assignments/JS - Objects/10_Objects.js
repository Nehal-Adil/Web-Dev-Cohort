// Problem Statement
// In many applications, data is stored in deeply nested objects. Accessing a property from a deeply nested object requires multiple checks to avoid errors. Instead of manually checking each level, we need a function that safely retrieves a value from a nested object using a dot-separated key path.

// Challenge
// Write a function that takes a nested object and a key path string (e.g., “user.address.city”) and returns the value. If any part of the path is missing, return "Key not found".

// Constraints
// « The input object should be valid.
// « The key path should be a string with dot notation () separating keys.
// « If akey is missing, return "Key not found".
// « The function should handle deeply nested objects.

function getNestedValueIterative(obj, keyPath) {
  if (typeof obj !== "object" || obj === null || typeof keyPath !== "string") {
    return "Key not found";
  }

  const keys = keyPath.split(".");
  let currentObj = obj;

  for (const key of keys) {
    if (currentObj && key in currentObj) {
      currentObj = currentObj[key];
    } else {
      return "Key not found";
    }
  }

  return currentObj;
}

// ---------------- Alternate Way -----------------------

function getNestedValue(obj, keyPath) {
  let keys = keyPath.split(".");

  let currentObj = obj;

  for (let key of keys) {
    if (currentObj[key] === undefined) {
      return "Key not found";
    }
    currentObj = currentObj[key];
  }

  return currentObj;
}

// Example usage:
const data = {
  user: {
    address: {
      city: "Bengaluru",
      zip: 560001,
    },
  },
};

console.log(getNestedValue(data, "user.address.city")); // Output: "Bengaluru"
console.log(getNestedValue(data, "user.address.country")); // Output: "Key not found"
