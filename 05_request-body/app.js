const express = require("express");

const app = express();

// middleware Express mein JSON body read karne ke liye pehle middleware enable karna hota hai
app.use(express.json()); 


app.post("/students", (req,res) => {
    console.log(req.body);

    res.json(req.body);
});

app.post("/courses", (req,res) => {
    res.json(req.body);
});

app.listen(3000,() =>{
    console.log("Server running on port 3000");
});








     