const studentService = require("../services/studentsService");

const getStudents = (req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;

    const students = studentService.getPaginatedStudents(page, limit);

    res.json(students);
};

module.exports = {
    getStudents
};