function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

// Do while Loop Introduction

let counter = 0;

do {

    console.log(`The random number is ${getRandomNumber(10)} `);
    counter += 1;


} while (counter < 10);

// So if you want your action run at least once, then you better be using the do while Loop as the do
// part runs the code within the do section and then only checks whether counter is less < than 10





/*
Add One to a Number with the Increment Operator (++)
Increment operator
Here's a tip. It's so common in JavaScript to increment a number value by one that there's a shorthand operator (called the "increment operator") that's used frequently with loops. Use it on your counter variable by replacing += 1 with two plus symbols (++).

Open the file do-while.js.
In the do block, use the increment operator to increase the number assigned to counter by one each time the loop runs:

function getRandomNumber(upper) { ... }

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter++; // increment operator
} while ( counter < 10 );
Similar to using the addition assignment operator and adding 1, the increment operator adds 1 to the current number value stored in counter and returns a value each time through the loop. The approach you use is up to you; the course will use the increment operator moving forward.

Decrement operator
JavaScript also provides the decrement operator (--), which subtracts one from an integer value. For example:

function getRandomNumber(upper) { ... }

let counter = 10;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter--; // decrement operator
} while ( counter > 0 );
This time, the loop counts down from 10 to 0, decreasing the value assigned to the counter variable by one each time through the loop. It's the same as counter -= 1.

*/

//** Another Do While Loop Example


// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"

let secret;

do {
    secret = prompt("What is the secret password?");



} while (secret !== "sesame");

// This should run after the loop is done executing
alert("You know the secret password. Welcome!");