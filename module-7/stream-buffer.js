const http = require('http');
const server = http.createServer();
const fs = require('fs');
const { buffer } = require('stream/consumers');
const { error } = require('console');

server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    //streaming

    const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt');

    //for buffer
    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })

    //ses howar por
    readableStream.on('end', () => {   
         res.statusCode = 200;
        res.end('text writing successfully')
    })

    readableStream.on('error', (error) => {
        console.log(error);
        res.statusCode = 500;
        res.end('something went wrong')
    })

    

});

server.listen(5000, () => {
    console.log('server on running');
})