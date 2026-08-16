const studentService = require("../services/studentsService");

const getStudents = (req,res) => {
    const students = studentService.getStudents();

    res.json(students);
}

module.exports = {
    getStudents
};