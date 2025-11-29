const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from my first server running at port 3000")
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
}) 