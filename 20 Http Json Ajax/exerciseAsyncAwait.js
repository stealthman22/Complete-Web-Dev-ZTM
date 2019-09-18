// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
    .then(response => response.json())
    .then(console.log)


// sol

async function url() {
    const response = await fetch('https://swapi.co/api/starships/9/')
    const data = await response.json()
    console.log(data)
}


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
}


// Sol wrong

/* const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {

    const array = await Promise.all(urls.map(url => fetch(url)).(await resp.json))
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])

} */



// Sol
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function() {
    const [users, posts, albums] = await Promise.all(urls.map(
        async function(url) {
            const fetchData = await fetch(url);
            console.log(fetchData)
            return fetchData.json()
        }
    ))
}






/* const getData = async function() {
    const array = await urls.map(url => fetch(url));
    console.log(array);

    for await (let request of array) {
        const data = await request.json();
        console.log(data)
    }

}
 */



// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://json.typicode.com/albums'
]

const getData = async function() {
    try {
        const array = await urls.map(url => fetch(url));
        console.log(array);

        for await (let request of array) {
            const data = await request.json();
            console.log(data)
        }

    } catch (error) {
        console.log('Ooooops', error)
    }
}