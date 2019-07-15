var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll('.listMenu > li');


// Create list buttons

var btn = document.createElement('button');
btn.appendChild(document.createTextNode('Del'));


//lists.forEach(list => list.appendChild(btn));

btn.classList.add('btn');


console.log(btn)

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

    li.appendChild(btn);

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
    console.log(this)
    this.classList.toggle('done');
}







button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lists.forEach(list => list.addEventListener('click', toggleDone))