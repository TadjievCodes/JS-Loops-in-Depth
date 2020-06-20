function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}


// Remember, the value of a variable declared with const cannot be changed through reassignment. 
// We're using the addition assignment operator (+=) to add one to the current value of counter, until it reaches the value 10




// Counter is the variable that gets incremented every time

let counter = 0;
while (counter < 100) {

    console.log(`The random number is ${getRandomNumber(10)} `);
    counter += 1;
}


// In this case, it's important to use the keyword let, which, as you learned, lets you change (or manipulate) a variable's value through reassignment