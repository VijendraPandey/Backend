const http = require("http");

// Create a simple HTTP server.
// - `req` is the incoming request object.
// - `res` is the response object used to send data back to the client.
const server = http.createServer((req, res) => {
    // Send a short text response and close the connection.
    res.end("Hello from my first server running at port 3000")
});

// Start the server and listen on port 3000.
// The callback runs once the server is successfully listening.
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})