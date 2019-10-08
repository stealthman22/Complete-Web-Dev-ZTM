// Building express server

const express = require('express'),

const app = express();



// Get request with express
app.get('/', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'Soccer'
    }
    res.send(user)
});
app.listen(3000);

