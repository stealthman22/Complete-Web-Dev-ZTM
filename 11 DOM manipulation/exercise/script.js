var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll('.listMenu > li');

//var bigLists = Array.from(document.querySelectorAll('.listMenu > li'));
console.log(lists);
//Created buttons





function inputLength() {
    return input.value.length;
}



function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    // Adds the item class to dynamically created li
    li.classList.add('items');





    // Add event listener
    li.addEventListener('click', () => {
        li.classList.toggle('done');
        console.log('click');


    })





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

function toggleDone() {

    this.classList.toggle('done');
}



function createButton() {
    var btn = document.createElement('button');

    btn.appendChild(document.createTextNode('Del'));

    btn.classList.add('btn');


    console.log(btn);


}




lists.forEach(() => {
    createButton();


});







button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lists.forEach(list => list.addEventListener('click', toggleDone));