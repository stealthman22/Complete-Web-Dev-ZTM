// allocate memory: memory heap
const a = 1;

// call stack
console.log('1');

// if this was an extremely large task, it can block that of 3, due to javascript's synchronous nature.
console.log('2');
console.log('3');



const one = () => {
    const two = () => {
        console.log('4')
    }
    two();
}




two()
one();

// Call stack


// stack oveflowf

// recursion
function foo() {
    //debugger
    foo()
}

foo();

// using set timeout can make a code block execute in an asynchronous manner

console.log('1');
// asynchronous: waits two seconds before it begins, hence giving others time to load. 
setTimeout(() => {
    console.log('2')
}, 2000);
console.log('3');



console.log('3'); // executes after passing 2 to the web api. 

setTimeout(() => {
    console.log('2')
}, 2000); // this is sent to the web api, after the call stack notifies it

console.log('1'); // executes
// Call Stack


setTimeout(() => {
    console.log('2')
}, 2000); // send it to the call back queue after 2 seconds
// Web API

callback()
    // CallBack Queue


// Event loop
// sends call backs in call back queue back to the call stack for execution

// Also uses the call back function process 
element.addEventListener('click', () => {
    console.log('click');
})