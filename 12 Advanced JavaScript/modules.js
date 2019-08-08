// IIFE




// Common JS + Browserify

module.exports = function add(a, b) {
    return a + b;
}


// js 2
var add = require('./add');




// ES6 + webpack

//js1 export multiple content from the file
export const add = (a, b) => a + b;

// or export only one thing
export default function add() {
    return a + b
}

//js 2 
import {
    add
} from './add'; // fpr multiple

//or
import add from './add' // for default