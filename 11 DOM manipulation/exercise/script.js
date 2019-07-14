var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll('.list');



function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");

    // Adds the item class to dynamically created li
    li.classList.add('list');

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

/* function hasClass(items, list) {
    return items.classList.contains(list);

} */



/* function addClick() {
    if (hasClass(e.target, 'list')) {
        console.log()
    }
} */

function toggleDone() {
    console.log('click');
    items.classList.add('done');


    /* if (e === true) {
        items = document.querySelectorAll('li').classList.add('done');
    } else {
        items = document.querySelectorAll('li').classList.remove('done');
    } */
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


items.forEach(item => item.addEventListener('click', toggleDone));