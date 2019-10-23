const fs = require('fs');

// House the function into a variable
const advent = fs.readFileSync('./input.txt').toString();
//console.log(advent);

// Spread the results of function above into an array
// Only worked with readfielsync, can't explain why.
const adventArray = [...advent];
//console.log(adventArray);

console.time('advent')
const sumAdvent = adventArray.reduce((acc, param, index) => {

        // Evaluates the second part
        if (acc === -1) {
            console.log(acc, index)
        }
        // Evaluates the first part, it outputs last because it is a total loop
        if (param === '(') {
            return acc + 1;
        } else if (param === ')') {
            return acc - 1
        }

    },
    0)
console.timeEnd('advent');





console.log(sumAdvent);