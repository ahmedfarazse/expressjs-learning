const express = require("express");

const studentRouter = require("./routes/students");

const coursesRouter = require("./routes/courses");

const app = express();

// middleware
app.use(express.json());


// prefixes
app.use("/students", studentRouter);

app.use("/courses", coursesRouter);


// Server listen
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});