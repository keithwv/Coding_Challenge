const { expect } = require("@jest/globals");
const createArray = require("./RandomNumberGenerator");


test("Shuffle version generates an array with a length of 10,000", () => {
  expect(createArray(1, 10000)).toHaveLength(10000);
});

test("Shuffle version generates an array where all values are unique", () => {
  const unique_values = new Set(createArray(1, 10000)).size;
  expect(unique_values).toBe(10000);
});
