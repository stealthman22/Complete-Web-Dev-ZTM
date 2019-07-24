// 1 const and let

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience = 90) {
    let wizardLevel = true;
}

const a = function() {
    let wizardLevel = true;
}


const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

// 2 Destructuring
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// 
const {
    player,
    experience
} = obj;

let (wizardLevel) = obj;

const name = 'john snow';

// 3  Object dynamic properties
const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}


const a = 'simon';
const b = true;
const c = {};

// For same obj and property name
const obj = {
    a: a,
    b: b,
    c: c
}

// better 
const obj = {
    a,
    b,
    c
}


// Template strings
const name = 'sally';
const age = 34;
const pet = 'horse';
//const greeting = 'Hello ' + name + 'you seem to be doing ' + 'greeting' + '!!!!';

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`

// Default arguments

function greet(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`

}


// Type Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


// arrow functions
function add(a, b) {
    return a + b;
}

// (a, b) => a + b;

const add = (a, b) => a + b;