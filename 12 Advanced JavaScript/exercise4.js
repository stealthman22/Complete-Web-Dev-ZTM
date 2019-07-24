//Solve these problems:

//#1 Create a one line function that adds adds two parameters

// Solution
const sum = (a, b) => a + b
    //Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

// Sol

23 // N 13
/* 
const addTo = (x) =>{
    return (y) =>  {
           return x + y
    }
}
const addToTen= addTo(10);
console.log(addToTen(5)); */

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)


// Solution
31;

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)


// Solution
17;

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

// Sol

28 || 48 // N

//What are the two elements of a pure function?

// Deterministic

// Avoiding side efects

/* 
Deterministic means, that a function always returns the same value/result every time you run it. A DOM event function, should also always return the same value/result every time which it gets executed. With this I mean, that it should always do the same work and it should always return the same result. This doesn't mean that It always perform the same action on the same element though.



The important thing to take away is, that it does and returns always the same. */