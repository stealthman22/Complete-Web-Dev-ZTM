// Building express server

const express = require('express'),

    app = express();




app.post('/profile', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'Soccer'
    }
    res.send(user)
});




// Get request with express
app.get('/', (req, res) => {
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


app.listen(3000);

