// Building express server

const express = require('express');
const bodyParser = require('body-parser/index');

const app = express();

// middleware
// for body form
app.use(bodyParser.urlencoded({ extended: false }));
// for json
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
    // requests 
    //console.log(req.query);
    //req.body()
    // console.log(req.headers);
    console.log(req.params)
    res.status(404).send('not found');
});

app.listen(3020);

