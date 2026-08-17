const getStudents = () => {
    return [
        { id: 1, name: "Ahmed" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Usman" },
        { id: 4, name: "Hamza" },
        { id: 5, name: "Hassan" },
        { id: 6, name: "Bilal" },
        { id: 7, name: "Adeel" },
        { id: 8, name: "Omer" }
    ];
};

const getPaginatedStudents = (page, limit) => {

    const students = getStudents();

    const skip = (page - 1) * limit;

    return students.slice(skip, skip + limit);
};

module.exports = {
    getStudents,
    getPaginatedStudents
};