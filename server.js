//console.log('Hello World');

/*
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello Jake!");
});

server.listen(PORT);
*/


/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World Express')
})

app.listen(port)
*/

/*
const http = require('https')
const app = require('./app')
const fs = require('fs');
const { createServer } = require('http');
const { Certificate } = require('crypto');

const port = 3000;


const server = http.createServer(
    {
        key: fs.readFileSync('keys/privatekey.pem'),
        cert: fs.readFileSync('keys/Certificate.pem')
    }, app
)

server.listen(port);
*/