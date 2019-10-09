// Building express server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();




app.post('/profile', (req, res) => {
    // middleware

    app.use(bodyParser.urlencoded({ extended: false }));

    const user = {
        name: 'Bally',
        hobby: 'Soccer'
    }
    console.log(req.body);
    res.send(user)

});




// Get request with express
app.post('/', (req, res) => {

    const user = {
        name: 'Sally',
        hobby: 'Soccer'
    }
    res.send(user)
});

app.get('/', (req, res) => {

    res.send('getting root')
});

app.get('/profile', (req, res) => {

    res.send('getting profile')
});


app.listen(3020);

