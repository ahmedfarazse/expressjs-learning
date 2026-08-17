const studentService = require("../services/studentsService");

const getStudents = (req, res) => {

    const { name, age } = req.query;

    const students = studentService.getFilteredStudents(name, age);

    res.json(students);
};

module.exports = {
    getStudents
};