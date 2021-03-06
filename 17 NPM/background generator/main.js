// Lodash has a lot of ectended functionality, but a lot of boiler plates too

var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('answer:', _.without(array, 5))


var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

var body = document.getElementById('gradient');


// input is an event for inpu

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value +
        ', ' +
        color2.value + ')';



    css.textContent = body.style.background + ',';
}


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);


/* Why does the printed linear gradient have a , at the end.
    When do we use textContent
*/