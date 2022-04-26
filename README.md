# Coding Challenge for Pandell

# Instructions
## Executing the Algorithm
This code was created in javascript and nodeJS (version 14.19.0). In order to run the algorithm
the following the command, node RandomNumberGenerator.js, should be run in the terminal window. 
Make sure you have selected correct directory, the folder "CODING_CHALLENGE" containing the javascript files,
before running the command in the terminal window

## Performing the tests
Unit tests were created for the algorithm using the Jest Library. The unit tests
are located in the RandomNumberGenerator.test.js. In order to run the tests Jest must be first be installed.
Run the npm install command in the terminal window in the correct directory in order to install Jest Version 27.5.1.

In the package.json file the test script has been set to jest. Thus, in order to run the unit tests created for the challenge type npm test
in the terminal window.

## Description of tests
According to the instructions the algorithm was required to generate a list 10,000 numbers between 1 and 10,000 (inclusive) in a random order each time
it is run. Each number in the list must be unique.

The first unit test created a test that would check if the generated array had a length of 10,0000.
The second unit test created a test that checks if all the numbers in the generated array are unique.
The SET object was used on the created array because the SET object only allows unique numbers no duplicates. 
The size of this newly created array must be equal to the size of the initial array if all the numbers are unique otherwise
the array sizes would not be equal.

