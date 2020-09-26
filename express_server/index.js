const express = require('express');  //import express
const app = express(); //initialize app
const port =3000;
const cors = require('cors');
const parser =require('body-parser');
const server = require('http').Server(app);

app.use(parser.json());
app.use(cors());

app.get('/here', (req, res) => {
    console.log("---->>>");
    res.json({message : 'success'});
})

server.listen(port, () => {
    console.log('server started..');
})