const studentService = require("../services/studentsService");

const createStudent = (req, res) => {

    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    const student = studentService.createStudent(name, age);

    res.status(201).json({
        message: "Student created",
        student
    });
};

module.exports = {
    createStudent
};