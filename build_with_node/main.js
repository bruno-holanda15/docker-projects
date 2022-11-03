const express = require('express');
const app = express();

// port created to listen in express
const port = 8003;

app.get("/", (req, res) => {
    res.send("<h1>Hi Node.js</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact route!</h1>");
});

app.listen(port);