const first = () => {
    const greet = 'HI';
    const second = () => {
        alert(greet);

    }
    return second;
}


const newFunc = first();
newFunc();

// Closures; Once a funtion is ran and executed, it's never going to execute again.
// But it will remember that there are references to those variables. 
// So the child scope always has access to the parent scope. 

// Currying 
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

// Compose 

// g is a function that takes in a param "a", the function executes, and since f is like the exact same function, it takes what g has returned (sum) and runs the logic again (num +1). 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);


// Avoiding side effects and ensure functional purity.