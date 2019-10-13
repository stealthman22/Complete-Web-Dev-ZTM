const fs = require('fs');

/* const advent = fs.readFile('./input.txt', (err, data) => {
    console.time('elapse')
    if (err) {
        console.log('You are doing it wrong')
    }
    console.log(data.toString())
    console.timeEnd('elapse')
}) */

// House the function into a variable
const advent = fs.readFileSync('./input.txt').toString();
//console.log(advent);

// Spread the results of function above into an array
// Only worked with readfielsync, can't explain why.
const adventArray = [...advent];
//console.log(adventArray);

const sumAdvent = adventArray.reduce((acc, param) => {
    if (param === '(') {
        return acc + 1;
    } else {
        return acc - 1
    };

}, 0)

console.log(sumAdvent)

theo