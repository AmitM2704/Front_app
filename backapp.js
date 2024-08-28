const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./mydb') ;


const app = express();
app.use(cors());
app.use(bodyParser.json());

const rt = require('./router/r1');

app.use('/' , rt);

app.use((req , res , next )=>{
    res.send(`this is root server`);
});

module.exports = app;
