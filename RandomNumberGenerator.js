const { performance } = require("perf_hooks");

// Function will shuffle an array in a random order
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    // swap elements
    array[i] = array[randomPosition];
    array[randomPosition] = temp;
  }
  return array;
};
// Function will create an array between a user specified min and max (min & max inclusive).
// Then shuffle newly created array in a random order
const createRandomArray = (min, max) => {
  let generatedArray = [];
  for (let i = min; i <= max; i++) {
    generatedArray.push(i);
  }
  shuffleArray(generatedArray) // shuffle generated Array
  return generatedArray;
};

const start = performance.now();
const x = createRandomArray(1, 30);
const end = performance.now();
console.log(end - start);
console.log(x);

module.exports = createRandomArray;
