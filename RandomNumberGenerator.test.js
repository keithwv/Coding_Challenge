// In order to run file type npm test in the terminal window
// See README.md for more thorough explanation

// Import function createRandomArray for testing
const { expect } = require("@jest/globals");
const createRandomArray = require("./RandomNumberGenerator");

test("Shuffle version generates an array with a length of 10,000", () => {
  expect(createRandomArray(1, 10000)).toHaveLength(10000);
});

test("Shuffle version generates an array where all values are unique", () => {
  const unique_values = new Set(createRandomArray(1, 10000)).size;
  expect(unique_values).toBe(10000);
});
