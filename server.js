// Load the http module to create an HTTP server.
const http = require('http');

// Define the hostname and port for the server
const hostname = 'localhost';
const port = 4000;

// Create an HTTP server that listens to requests on the defined port
const server = http.createServer((req, res) => {
    // Log your name to the console
    console.log('Ankit Tiwari'); // Replace 'Your Name' with your actual name

    // Send a response back to the client
    res.statusCode = 200; // HTTP status code for OK
    res.setHeader('Content-Type', 'text/plain'); // Set the content type of the response
    res.end('Check the console for the logged name!'); // End the response with a message
});

// Start the server and listen on the defined port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
