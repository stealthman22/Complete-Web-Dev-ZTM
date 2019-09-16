/* // Using Promise syntax
movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => 330, 'Left')


// Using async syntax
async function playerStart() {
    const firstMove= await movePlayer(100, 'Left'); // pause
    const secondMove = await movePlayer (400, 'Left') //pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
} */


// With promise syntax
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// With async syntax
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}



const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Promise

Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch('OOOPS')


// async

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData1 = async function() {
    // try catch error block
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))

        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('OOPS', err)
    }
}