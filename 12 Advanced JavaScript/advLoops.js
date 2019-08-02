const detailedBaskets = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}


const basket = ['apples', 'oranges', 'grapes'];

// for loop
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// for each loop
basket.forEach(item => {
    console.log(item)
});

// for of loop
for (item of basket) {
    console.log(item);
}


// for in loop




for (item in detailedBaskets) {
    console.log(item);
}

// for in is used for an object it grabs the keys but not the values as object is an enumerable.
// It allows us to see the properties


/* 
iterating: Going one by one around items in an iterable (strings and arrays)

enumerating: enumerate over an enumerable (objects).

for in will work on arrays, giving them indexes for keys and grabs the indexes
*/