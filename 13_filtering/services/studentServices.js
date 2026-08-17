const getStudents = () => {
    return [
        { id: 1, name: "Ahmed", age: 22 },
        { id: 2, name: "Ali", age: 21 },
        { id: 3, name: "Usman", age: 22 },
        { id: 4, name: "Hamza", age: 23 },
        { id: 5, name: "Hassan", age: 21 }
    ];
};

const getFilteredStudents = (name, age) => {

    const students = getStudents();

    return students.filter(student => {

        if (name && age) {
            return student.name === name && student.age === Number(age);
        }

        if (name) {
            return student.name === name;
        }

        if (age) {
            return student.age === Number(age);
        }

        return true;
    });
};

module.exports = {
    getStudents,
    getFilteredStudents
};