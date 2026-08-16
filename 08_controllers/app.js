const express = require("express");

const studentRouter = require("./routes/students");

const app = express();

app.use(express.json());

app.use("/students", studentRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});