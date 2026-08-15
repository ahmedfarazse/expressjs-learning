const express = require("express");

const app = express();

app.get("/students/:id", (req,res) => {
    res.send(`Student ID : ${req.params.id}`);
});


app.get("/students/:studentId/courses/:courseId", (req,res) => {
    res.json(req.params);
});

app.get("/products/:id", (req,res) => {
    res.send(`Product ID : ${req.params.id}`);
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});