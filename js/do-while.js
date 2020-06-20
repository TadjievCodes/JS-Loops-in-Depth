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