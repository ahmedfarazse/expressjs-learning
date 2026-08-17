const studentService = require("../services/studentsService");


const getStudents = (req, res) => {

    const { sort, order } = req.query;

    const students = studentService.getSortedStudents(sort, order);

    res.json(students);
};


module.exports = {
    getStudents
};