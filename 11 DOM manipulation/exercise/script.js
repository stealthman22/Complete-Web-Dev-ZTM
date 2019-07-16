var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll('.listMenu > span');
var btns = document.querySelectorAll('.listMenu > button');


// Create list buttons



// append btns





/* 
for (let i = 0; i < btns; i++) {

    var btns = document.createElement('button');
    btns.appendChild(document.createTextNode('Del'));
    btns.classList.add('btn');
    ul.appendChild(btns);
    console.log(btns);
    lists.appendChild(btns);


} */



//ul.appendChild(btns);



//lists.forEach(list => list.appendChild(btns));



/* function appendButton() {
    for (let i = 0; i < lists.length; i++) {
        x.map(list => list.appendChild(btns));
    }
}

appendButton(); */



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

    li.appendChild(btns);

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

function deleteItem(e) {
    console.log(e);
}







button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lists.forEach(list => list.addEventListener('click', toggleDone));

btns.forEach(btn => btn.addEventListener('click', deleteItem));