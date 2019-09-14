const promise = new Promise((resolve, reject) => {
        if (true) {
            resolve('Stuff worked');
        } else {
            reject('Error, it broke')
        }
    })
    /* 
    promise
        .then(result => result + '!')
        .then(result2 => {
            throw Error
            console.log(result2)
        })
        .catch(() => console.log('error!')); */


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'is it me you are looking for?')
})

// Waits until all promises are resolved
// But if you run the promises first before promise.all, it will be  instant, as all the promises will have ben resolved.
Promise.all([promise, promise2, promise3, promise4]).then(values => {
    console.log(values);
})



// You can use a promise even when you don't have the value yet.
promise.then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        console.log(results + '1')
    })