const express = require("express");

const router = express.Router();

router.get("/",(req,res) => {
    res.send("Students Page");
});

router.post("/",(req,res) => {
    res.send("Created Students");
});

module.exports = router;