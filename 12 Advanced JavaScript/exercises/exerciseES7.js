// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

// sol
dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

// sol
const filterDragons = dragons.filter(dragon => dragon.includes('John'));
console.log(filterDragons);


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

// sol
function exponent(num) {
    return num ** 100
}



// #4) Using your function from #3, put in the paramter 10000. What is the result?

// sol
exponent(1000)
    // 1e+300


// Research for yourself why you get this result

/* 
It is called exponential notation. And the computer does this to save display space and storage. 
1 is the mantissa
+300 is the exponent.
This simply means 1 to the power of 300
*/

// Was supposed to be 

exponent(10000);

// Infinity