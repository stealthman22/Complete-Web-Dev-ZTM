// String padding
'Turtle'.padStart();

'Turtle'.padEnd();


// Trailing commas
const fun = (a, b, c, d, ) => {
    console.log(a);
}

fun(1, 2, 3, 4, );

// Object.values  Object.entries;

let obj = {
    user0: 'Santa',
    user1: 'Rogue',
    user2: 'Baller'
}

// Old approach
// To treat objects like arrays, looping over them
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})


Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})


// Replacing the content of the key forthe items 
//   user0: 'Santa', becomes Santa0
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('user', '');
})




// Async Await