# Express.js Filtering

## Introduction

Filtering is the process of returning only the data that matches specific conditions.

In an API, filtering is commonly done using query parameters.

---

## Query Parameters for Filtering

Example:

GET /students?name=Ahmed

Here:

- `name` is the query parameter.
- `Ahmed` is the value used for filtering.

Query parameters can be accessed using `req.query`.

Example:

const { name, age } = req.query;

---

## Filtering by Name

Example:

const getFilteredStudents = (name) => {

    const students = getStudents();

    return students.filter(student => {
        return student.name === name;
    });
};

Request:

GET /students?name=Ahmed

Result:

[
  {
    id: 1,
    name: "Ahmed",
    age: 22
  }
]

---

## Filtering by Age

Example:

const getFilteredStudents = (age) => {

    const students = getStudents();

    return students.filter(student => {
        return student.age === Number(age);
    });
};

Request:

GET /students?age=22

Result:

Students with age 22 are returned.

---

## Multiple Filters

Multiple query parameters can be used together.

Example:

GET /students?name=Ahmed&age=22

The controller can read both values:

const { name, age } = req.query;

The service can check both conditions.

Example:

return students.filter(student => {
    return student.name === name &&
           student.age === Number(age);
});

---

## Optional Filters

Filters can be optional.

Example:

const getFilteredStudents = (name, age) => {

    const students = getStudents();

    return students.filter(student => {

        if (name && age) {
            return student.name === name &&
                   student.age === Number(age);
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

If no filter is provided, all students are returned.

---

## Filtering Flow

Request

GET /students?age=22

        ↓

Controller

        ↓

Read req.query

        ↓

Service

        ↓

Filter data

        ↓

Controller

        ↓

Response

---

## Controller and Service

The controller reads the query parameters.

Example:

const { name, age } = req.query;

const students = studentService.getFilteredStudents(name, age);

The service performs the filtering logic.

---

## JavaScript `filter()`

The `filter()` method creates a new array containing elements that satisfy a condition.

Example:

const result = students.filter(student => {
    return student.age === 22;
});

Only students whose age is 22 are included in the result.

---

## Query Parameter Values

Values received through `req.query` are strings.

Example:

GET /students?age=22

The value of `age` is received as a string.

For numeric comparison, convert it using:

Number(age)

Example:

student.age === Number(age)

---

## Benefits of Filtering

- Returns only relevant data.
- Makes APIs more useful.
- Reduces unnecessary data in responses.
- Allows clients to search or narrow down resources.

---

## Best Practices

- Use query parameters for filtering.
- Keep filtering logic inside the service layer.
- Read query parameters in the controller.
- Convert query values to the correct data type.
- Keep filtering conditions clear and readable.

---

## Common Mistakes

- Using undefined variables inside the service.
- Forgetting to pass filter values to the service.
- Using a pagination function for filtering.
- Forgetting that query parameter values are strings.
- Comparing a number directly with a query parameter without conversion.
- Putting all filtering logic inside the route.

---

## Interview Questions

- What is filtering in an API?
- How do you pass filters through a URL?
- What is `req.query`?
- How does JavaScript `filter()` work?
- Why do query parameter values need type conversion?
- How can multiple filters be applied?
- Where should filtering logic be placed in a layered Express application?

---

## Quick Revision

- Filtering returns only matching data.
- Query parameters are commonly used for filtering.
- Query parameters are accessed through `req.query`.
- JavaScript `filter()` is used to filter arrays.
- Numeric query parameters should be converted using `Number()`.
- Controller reads filter values.
- Service performs filtering logic.