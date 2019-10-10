const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errrrorrrr');
    }
    console.log(data.toString());
});