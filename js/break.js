const secretWord = 'tomato';
let message = 'Access denied :(';

for (let i = 5; i >= 1; i--) {
    // And because of this i-- it keeps showing us how many tries we have left after the loop ran, cool thing 
    let guess = prompt(`Enter the secret word. You have ${i} tries.`);
    if (guess === secretWord) {
        message = 'Welcome to the secret loop world!';
        break; // immediately terminate the loop
        // So that it doesn't keep running but exits the loop
    }
}

alert(message);