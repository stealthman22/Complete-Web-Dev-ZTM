// Scope



var b = 'Can I access it';

/* function bb() {
    var a = 'hello';
    console.log(bb);
} */

/* function bb() {
    var a = 'hello';
    b = 'Hello';
} */


var fun = 5;

function funFunction() {
    // Child scope.
    var fun = 'heellllo';
    console.log(1, fun);
}

function funerFunction() {
    // Child scope.
    var fun = 'bye';
    console.log(2, fun);
}


function funestFunction() {
    // Child scope.
    fun = 'ahhhhhhhh';
    console.log(3, fun);
}
console.log('window', fun);
funFunction();
funerFunction();
funestFunction();