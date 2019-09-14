const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


// Promise.all + map 
// call promise.all
// map over urls
// fetch the data (make an ajax call to the urls)
// call .then
// convert to json with fetch json method
// Get the results and log them 

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('Oh no something went wrong \u{1F627}'))