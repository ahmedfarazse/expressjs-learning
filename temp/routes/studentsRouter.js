const express = require("express");

const router = express.Router();

const {
    getStudents
} = require("../controller/studentController");

router.get("/", getStudents);

module.exports = router;