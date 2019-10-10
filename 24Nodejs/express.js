// Building express server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// middleware
// for body form
app.use(bodyParser.urlencoded({ extended: false }));
// for json
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.send('getting root')
});

app.get('/profile', (req, res) => {

    res.send('getting profile')
});

// Get request with express
app.post('/profile', (req, res) => {
    console.log(req.body);
    const user = {
        name: 'Bally',
        hobby: 'Soccer'
    }
    res.send(user);
});

app.listen(3000);

