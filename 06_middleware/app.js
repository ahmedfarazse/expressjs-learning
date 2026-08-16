const express = require("express");

const app = express();

const logger = (req,res,next) => {
    console.log(req.method, req.url);
    next();
};

app.use(logger);

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Home Page");
});

app.get("/about", (req,res) => {
    res.send("About Page");
});

app.post("/students", (req,res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

