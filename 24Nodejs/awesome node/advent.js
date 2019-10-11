const fs = require('fs');

/* const advent = fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.log('You are doing it wrong')
    } console.log(data.toString())
}) */

// House the function into a variable
const advent = fs.readFileSync('./input.txt').toString();

// Spread the results of function above into an array
// Only worked with readfielsync, can't explain why.
const adventArray = [...advent];

/* const sumAdvent = adventArray.reduce((param, acc) => {
    for (let i = 0; i < adventArray.length; i++) {
        if (param === '(') {
            acc + 1;
        } else { acc - 1 };

    }
    return adventArray
}, 0) */

/* const sumAdvent = adventArray.map(param => {
    if (param === '(') {
        param + 1;
    }
    ;
}) */


/* const sumAdvent = adventArray.reduce((acc, param) => {
    if (param === '(') {
        acc + 1
    } else if (param === ')') {
        acc - 1
    }

    return acc + param;

}, 0)

console.log(sumAdvent); */