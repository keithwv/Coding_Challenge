const { expect } = require("@jest/globals");
const createRandomNumberList = require("./RandomNumberGenerator");
const createArray = require("./Shuffle");

test("Generates an array with a length of 10,000", () => {
  expect(createRandomNumberList(1, 10000)).toHaveLength(10000);
});

test("Generates an array where all values are unique", () => {
  const unique_values = new Set(createRandomNumberList(1, 10000)).size;
  expect(unique_values).toBe(10000);
});

test("Shuffle version generates an array with a length of 10,000", () => {
  expect(createArray(1, 10000)).toHaveLength(10000);
});

test("Shuffle version generates an array where all values are unique", () => {
  const unique_values = new Set(createArray(1, 10000)).size;
  expect(unique_values).toBe(10000);
});
