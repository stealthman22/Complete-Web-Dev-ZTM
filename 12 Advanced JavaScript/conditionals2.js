// Ternary operator
// condition ? expr1 : expr2;



function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? 'you may enter' : 'access denied';

var automatedAnswer = 'your account number is ' + (isUserValid(false) ? '1234' : 'not available');

function condition() {
    if (isUserValid(true)) {
        return 'you may enter';

    } else {
        return 'access denied';
    }
}


var answer2 = condition();

// Switch

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case 'foward':
            whatHappens = 'you encountered a monster';
            break;
        case 'back':
            whatHappens = 'you arrived home';
            break;
        case 'right':
            whatHappens = 'you found a river';
            break;
        case 'left':
            whatHappens = 'you ran into a contol';
            break;
        default:
            whatHappens = 'please enter a valid direction'
    }
    return whatHappens;
}