/* 5 + 6;
if (5 + 6 === 11) {
    alert('Smart guy');
}

console.log('Heeeelllloooooooooooooooooooo!!!!!!!!!!!!!!!', 'How are you??'); */


// Functions

// function declaration

/* unction sayHello() {
    console.log('hello');
}

sayHello();

// func expresssions
var sayBye = function() {
    console.log('Bye');
}

//

function sing(song) {
    console.log(song);

}

sing('lalal lalalla');
sing('waooooooooooo'); */

/* function multiply(a, b) {
       if (a > 10 || b > 10) {
            return 'that is too hard';
        } else {
            return a * b;
        } 

    return a * b;

}

alert(multiply(3, 4)); */



// Arrays

/* var list = ['tiger', 'cat', 'bear', 'bird'];
console.log(list[1]);

var mixedList = [
    ['tiger', 'cat', 'bear', 'bird']
];

console.log(mixedList[0][3]); */

// Objects

/* var user = {
    name: 'John',
    age: '34',
    hobby: 'Soccer',
    isMarried: 'false',
    spells: ['abrakadabra', 'shazam', 'boo'],
    shout: function() {
        console.log('shouting out louddddddddddddd');
    }
}

var list = [{
        username: 'andy',
        password: 'secret'
    },
    {
        username: 'jess',
        password: '12345'
    }
] */


// Loops

// for loops

var todo = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'
];

// This will allow the pop of all items.
var todoLength = todo.length;

// Looping to add ! to all todo items
for (let i = 0; i < todoLength; i++) {
    // todo[i] = todo[i] + '!';
    //pop will stop halfway through cos the length keeps updating
    todo.pop();

}

// while loop
/* var counterOne = 10;
while (counterOne > 10) {
    console.log('while', counterOne);
    counterOne--
} */

// do while
/* 
var counterTwo = 10;
do {
    console.log('do while', counterTwo);
    counterTwo--;

} while (counterTwo > 10); */

// For Each method


var todo = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'
];

var todoImportant = [
    'clean room!',
    'brush teeth!',
    'exercise!',
    'study javascript!',
    'eat healthy!'
];

// This will allow the pop of all items.
var todoLength = todo.length;

// Looping to add ! to all todo items
for (let i = 0; i < todoLength; i++) {
    // console.log(todo[i], i);

}

/* todo.forEach((todo, i) => {
    console.log(todo, i);
}); */

// or

// This func can now be used in in any forEach
function logTodo(todo, i) {
    console.log(todo, i)
}

todo.forEach(logTodo);
todoImportant.forEach(logTodo)