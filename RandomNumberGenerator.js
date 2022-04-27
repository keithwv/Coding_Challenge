// In order to run file type "node RandomNumberGenerator.js" in the terminal window
// See README.md for more thorough explanation

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
// Then shuffle newly created array in a random order using the shuffleArray function defined above
const createRandomArray = (min, max) => {
  let generatedArray = [];
  for (let i = min; i <= max; i++) {
    generatedArray.push(i);
  }
  shuffleArray(generatedArray); // shuffle generated Array
  return generatedArray;
};

// run function to generate a random list between 1 and 10000
const finalArray = createRandomArray(1, 10000);

// print final array to show that the numbers are in random order
console.log("Sample of the generated array shown below:");
console.log(finalArray);

// print array size and the number of unique values to ensure they are equal
console.log("The length of the generated array is", finalArray.length);
console.log(
  "The number of unique values in the generated array is",
  new Set(finalArray).size
);

//Export function
module.exports = createRandomArray;
