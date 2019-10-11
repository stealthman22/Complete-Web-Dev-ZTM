const fs = require('fs');

// Read
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errrrorrrr');
    }
    console.log('async', data.toString('utf8'));
});

const file = fs.readFileSync('./hello.txt').toString();
console.log('sync', file);

// Append
fs.appendFile('./hello.txt', ' This is so cooool', err => {
    if (err) {
        console.log(err)
    }
})

// Write
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if (err) {
        console.log('sad to see you go dear')
    }
})

// Delete
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('Inception')

})

