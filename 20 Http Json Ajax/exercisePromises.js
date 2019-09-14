// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

// Solutions

// NO 1

// fisrt try
/* const promise = new Promise((resolve, reject) => {
    return setTimeout(resolve, 4000, 'SUCCESS')
})

console.log(promise) */


const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'SUCCESS')
}).then(value => {
    console.log(value)
})

// NO 2 
// Already included in 1 but this is good:
promise.then(console.log)

// NO 3  (not so correct. Did not use set timeout correctly)

const promise1 = Promise.resolve('SUCCESS');

promise1.then(setTimeout(4000));

const promise2 = Promise.resolve('SUCCESS').then(setTimeout(4000))


// N0 4

const noPromise = Promise.reject('failed').catch(() => console.log('Ooops something went wrong'))

// Can be shorter, arrow func not so necessary.
Promise.reject('failed').catch(() => console.log('Ooops something went wrong'))

// NO 5

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]



Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(data => {
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
    console.log(data[3])
        // Learnt to add the err parameter
}).catch(err => console.log('This is strange', err))