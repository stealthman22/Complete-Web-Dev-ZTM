// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';


// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'



// sol
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);
// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable


// sol
// Trim removes every trailing white space from the string.

// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

// sol
// it concatenates the second parameter to the trailing spaces.


// #3) Get the below object to go from:
let obj = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer'
    }
    // to this:
    //'my name is Rudolf the raindeer'

// sol

//let newObj = JSON.stringify(obj); // Totally wrong, this converts it to JSON that goes to the server.
//console.log(newObj)

// sol

//Object.entries(obj).map((value) => value.join(' ')).join(' ');


const newObj = Object.entries(obj).map((value) => value.join(' ')).join(' ')

console.log(newObj)