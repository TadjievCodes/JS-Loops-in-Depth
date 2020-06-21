function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}


// The `for` loop is a more compact variation of the while loop, with similar parts, and it's useful when you know how many times 
// you want to repeat an action

for (let counter = 0; counter < 10; counter += 1) { // Or counter ++

    console.log(`The random number is ${getRandomNumber(10)} `);

}


// Another example so it generates numbers from 5 up to 100 and += 1 so incrmenents once every number

// So counter starts from 5


for (let counter = 5; counter <= 100; counter += 1) {
    console.log(counter);
}