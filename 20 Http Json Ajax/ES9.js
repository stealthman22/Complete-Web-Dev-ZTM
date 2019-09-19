
// This is Andrei's work

// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

//const {tiger, ...rest} = animals;
function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}
const {
    tiger,
    lion,
    ...rest
} = animals;

objectSpread(tiger, lion, rest)



const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
    return a + b + c + d + e
}



// finally

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
    .then(array => {
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(data => console.log('extra data'));


// for await of

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// for of loop
const loopUrls = () => {
    for (url of urls) {
        console.log(url)
    }
}

function loopUrls() {
    for (url of urls) {
        console.log(url)
    }
}


// for await of loop for arrays of promises
const getData2 = async function () {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json()
    }
}