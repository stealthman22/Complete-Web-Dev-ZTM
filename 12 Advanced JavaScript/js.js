// allocate memory: memory heap
const a = 1;

// call stack
console.log('1');
console.log('2');
console.log('3');



const one = () => {
    const two = () => {
        console.log('4')
    }
    two();
}
one();