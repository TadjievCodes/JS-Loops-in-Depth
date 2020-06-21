const main = document.querySelector('main');


// Dynamically Display HTML with a Loop

let html = "";

// if its just i < 10, it won't show the last item but now
/*
for (let i = 1; i <= 100; i += 1) {

    html += `<Div>${i}</Div>`;


}
*/

// Or we could do in another way to increment it to 1 so it starts from 1 until 10 including without <= but just with < evaluation sign
/*
for (let i = 0; i < 10; i += 1) {

    html += `<Div>${i + 1}</Div>`;


}
*/


for (let i = 5; i <= 100; i += 5) {

    html += `<Div>${i}</Div>`;


}

// So now it prints the numbers starting from 5 up to 100

// its better we keep main last line outised the loop to make it more performant

// We're assigning our display html variable into the main Dom Element where it'll get displayed
main.innerHTML = html;