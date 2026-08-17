const getStudents = () => {
    return [
        { id: 1, name: "Ahmed", age: 22 },
        { id: 2, name: "Ali", age: 21 },
        { id: 3, name: "Usman", age: 22 },
        { id: 4, name: "Hamza", age: 23 },
        { id: 5, name: "Hassan", age: 21 }
    ];
};


const getSortedStudents = (sort, order) => {

    const students = getStudents();

    if (sort === "age") {

        students.sort((a, b) => {
            return order === "desc"
                ? b.age - a.age
                : a.age - b.age;
        });

    } else if (sort === "name") {

        students.sort((a, b) => {
            return order === "desc"
                ? b.name.localeCompare(a.name)
                : a.name.localeCompare(b.name);
        });

    }

    return students;
};


module.exports = {
    getStudents,
    getSortedStudents
};