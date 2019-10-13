const fs = require('fs');


console.time('advent')
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
console.timeEnd('advent')

console.log(sumAdvent)
console.timeEnd('advent')