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



let obj = {
    username0: 'Santa',
    username1: 'Rogue',
    username2: 'Baller'
}

// Replacing the content of the key forthe items 
//   user0: 'Santa', becomes Santa0
Object.entries(obj).map(value => {
    // return the second item in the array (index of 1)
    // then grab the first items, index 0
    // this joins the leftovers behind th evalue, and uses traditional indexes as keys
    return value[1] + value[0].replace('username', '');
})


// When Looping over arrays with the keys, values, and enteries methods, 0 means the key of the item, while 1 means the value of the item.

// Async Await