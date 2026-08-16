
const getStudents = (req, res) => {
    res.send("Students Page");
};

const createStudent = (req, res) => {
    res.json(req.body);
};

module.exports = {
    getStudents,
    createStudent
};