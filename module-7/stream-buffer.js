const http = require('http');
const server = http.createServer();
const fs = require('fs');
const { buffer } = require('stream/consumers');

server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    //streaming

    const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt');

    //for buffer
    readableStream.on('data', (buffer) => {
        res.write(buffer)
    })

    //ses howar por
    readableStream.on('end', () => {        
        res.end('Hello From World')
    })

    

});

server.listen(5000, () => {
    console.log('server on running');
})