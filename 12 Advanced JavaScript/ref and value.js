// passed by value 

var a = 5;
var b = a;


b++

console.log(a);
console.log(b);


// Passed by reference

let obj1 = {
    name: 'Yaw',
    password: '123'
};
let obj2 = obj1;

obj2.password = 'easy';

console.log(obj1);
console.log(obj2);

let c = [1, 2, 3, 4, 5]
    //let d = c;
    //cloning
let d = [].concat(c)
d.push(1726237328);
console.log(c);
console.log(d);


/* let obj = {
    a: 'a',
    b: 'b',
    c: 'c'
}; */

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try to copy me'
    }
};
// cloning an object
let clone = Object.assign({}, obj);

let clone2 = {
    ...obj
};

//deep cloned
let superClone = JSON.parse(JSON.stringify(obj))


//clone2.c = 26;
obj.c.deep = 'Yippe';



console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);


// Deep cloning