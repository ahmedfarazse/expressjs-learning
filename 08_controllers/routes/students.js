const express = require("express");

const router = express.Router();

const {
    getStudents,
    createStudent
} = require("../controller/studentsController");

router.get("/", getStudents);

router.post("/", createStudent);

module.exports = router;