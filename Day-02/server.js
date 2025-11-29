const express = require("express");

// Create an Express application instance.
const app = express();

// Define a route for GET /
// - `req` is the incoming request.
// - `res` is the response object to be sent to the client.
app.get("/", (req, res) => {
    // Send a simple text response for the root route.
    res.send("Hello World from Express!");
})

// Define a route for GET /about
// Use named routes to organize endpoints..
app.get("/about", (req, res) => {
    // Send a short informational response for the about page.
    res.send("This is the About page.");
})

// Start the Express server on port 3000.
// The callback confirms the server is running and prints the URL.
app.listen(3000, () => {
    console.log("Express server is running on http://localhost:3000");
})