const express = require("express");

const app = express();

app.get("/students", (req,res) => {
    res.json(req.query);
});

app.get("/products", (req,res) => {
    res.json(req.query);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// test on local host 

// /students?name=Ahmed

// /students?name=Ahmed&age=22

// /products?category=mobile&brand=Samsung