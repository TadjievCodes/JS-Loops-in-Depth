function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}


// The `for` loop is a more compact variation of the while loop, with similar parts, and it's useful when you know how many times 
// you want to repeat an action

for (let counter = 0; counter < 10; counter += 1) { // Or counter ++

    console.log(`The random number is ${getRandomNumber(10)} `);

}