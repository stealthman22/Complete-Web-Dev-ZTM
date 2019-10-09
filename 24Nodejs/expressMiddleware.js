const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log('<h1>HELLO </h1>')
    next()
})

app.get('/', (req, res) => {
    res.send('testing 123');
})

app.listen(3000);