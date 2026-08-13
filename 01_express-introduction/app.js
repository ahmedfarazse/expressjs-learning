
// import Express package
const express = require("express");


// Express application create
const app = express(); 


// Handle GET request for "/"
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// Handle GET request for "/about"
app.get("/about", (req,res) => {
    res.send("About Page");
});

// Handle GET request for "/students"
app.get("/students", (req,res) => {
    res.send("Student Details Page");
});

// start server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});