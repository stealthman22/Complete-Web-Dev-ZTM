//import largeNumber from 'script2.j';
const script2 = require('./script2.js');

const a = script2.largeNumber;
const b = 9;


setTimeout(() => {
    console.log(a + b);
}, 3000)

console.log(a * b);