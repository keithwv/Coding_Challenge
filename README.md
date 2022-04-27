# Coding Challenge for Pandell

# Instructions

## Executing the Algorithm

This code was created in javascript and nodeJS (version 14.19.0). In order to run the algorithm
the following the command, node RandomNumberGenerator.js, should be entered in the terminal window.
Make sure you have selected the correct directory, the folder "Coding_Challenge" containing the javascript files,
before running the command in the terminal window

## Performing the tests

Unit tests were created for the algorithm using the Jest Library. The unit tests
are located in the RandomNumberGenerator.test.js. In order to run the tests, Jest must be first be installed.
Run the npm install command in the terminal window in the correct directory in order to install Jest Version 27.5.1.

In the package.json file the test script has been set to jest. Thus, in order to run the unit tests created for the challenge type npm test in the terminal window.

## Description of tests

According to the instructions the algorithm was required to generate a list 10,000 numbers between 1 and 10,000 (inclusive) in a random order each time it is run. Each number in the list must be unique.

The first unit test created a test that would check if the generated array had a length of 10,0000.
The second unit test created a test that checks if all the numbers in the generated array are unique.
The SET object, in the second unit test, was used on the created array because the SET object only allows unique numbers no duplicates.
The size of this newly created array must be equal to the size of the initial array if all the numbers are unique otherwise the array sizes would not be equal.

## Description of the algorithm

Two functions were created in order to achieve the desired outcome. The shuffle array function takes an array as an input
,shuffles it contents in a random order, and returns the shuffled array. The shuffle array uses one for loop and has
time value complexity of O(n).

The createRandomArray function takes in two inputs a min and max value and returns a list that has the same length
as the max value. This list includes only unique values between the min and max value (inclusive). In this instance a min and max value of 1 and 10,000 were chosen respectively. However this algorithm is reusable function that could be used to generate a list of unique numbers between the specified min and max inputs.
The function reusability follows the DRY (Do not repeat yourself) principle of coding.

The createRandomArray uses a for loop to generate a list of numbers between the user specified inputs. The shuffle array function, defined above, is called with this newly generated array. This newly shuffled array is then returned as the output of the function. The createRandomArray also has a time value complexity of
O(n). It still performs well with very large input values.

## Other algorithms considered

The other algorithm that I considered is shown below and was rejected because of its poor performance when using larger numbers. The performance was compared to the algorithm described above and there were significant differences in computational time between the two:

    const createRandomNumberList = (min, max) => {
    let numberList = [];
    while (numberList.length<max) {

    let random_number = Math.floor(Math.random()*(max-min+1))+min;
     if (!numberList.includes(random_number)) {
    numberList.push(random_number)
     }
    }
    return numberList
    }

The flaw in the program was the if statement that checked to see if the random number generated was already in the existing array, this greatly increased the computational time. It is far superior to generate an array initially and the shuffle its contents afterwards
