const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Home Page");
});

app.get("/about", (req,res) => {
    res.send("About Page");
});

app.get("/students", (req,res) => {
    res.send("student Page");
});

app.get("/courses", (req,res) => {
    res.send("Courses Page");
});

app.post("/students", (req,res) => {
    res.send("created students");
});

app.put("/students", (req,res) => {
    res.send("Updated students");
});

app.delete("/students", (req,res) => {
    res.send("Delete students");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});