/* var button = document.getElementsByTagName('button')[0];

button.addEventListener('mouseenter', function() {
    console.log('CLICK!!!!!!!!');
}) */


var button = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');



function inputLength() {
    return input.value.length;
}

function createListElement() {
    // create li
    var li = document.createElement('li');
    //append createTextNode as child to li
    li.appendChild(document.createTextNode(input.value));
    // attach li to desired element
    ul.appendChild(li);
    // refresh input field
    input.value = ''

}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createListElement();
    }
}


button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);


/* 

Note: Callback Functions
In the previous video you saw something interesting:

Event listener syntax : 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected: 

button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));


This is something called a callback function. When that line of javascript runs, we don't want the addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.
*/