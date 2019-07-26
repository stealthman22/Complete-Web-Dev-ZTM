// reference type

var object1 = {
    value: 10
};
var object2 = object1;
var object3 = {
    value: 10
};

// Context
// context vs scope.

function b() {
    let a = 4;
}

//this (the window object)
console.log(this === window);
// true

function a() {
    console.log(this)
}
a();

// This is important to instantiation. 

// Instantiation

// super class
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am a ${this.name}, I'm a ${this.type}`)
    }
}

// extension of player
class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('Wizard', this);

    }
    play() {
        console.log(`Weeeeeeee I'm a ${this.type}`);
    }
}

// instances of wizard
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');