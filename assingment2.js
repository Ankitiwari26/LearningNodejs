const http = require('http')

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/Home') {
        res.end('Welcome home');
    }
    else if (req.url === '/about') {
        res.end('Wekcome to about page')
    }
    else if (req.url === '/node') {
        res.end('Welcome to my Node Js project')
    }
    else {
        res.end('404 Not Found')
    }
});

// server.listen(4000, () => {
//     console.log('Server is running on localhost:4000')
// })

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});