# Express.js Sorting

## Introduction

Sorting is the process of arranging data in a specific order.

In an API, sorting can be controlled using query parameters.

---

## Sorting with Query Parameters

Example:

GET /students?sort=age

Here:

- `sort` specifies the field used for sorting.
- `age` is the field being sorted.

---

## Ascending Order

For numbers, ascending order means smallest to largest.

Example:

const students = [
    { id: 1, name: "Ahmed", age: 22 },
    { id: 2, name: "Ali", age: 21 },
    { id: 3, name: "Usman", age: 22 },
    { id: 4, name: "Hamza", age: 23 },
    { id: 5, name: "Hassan", age: 21 }
];

Sorting by age:

students.sort((a, b) => {
    return a.age - b.age;
});

Result:

21
21
22
22
23

---

## Descending Order

For numbers, descending order means largest to smallest.

Example:

students.sort((a, b) => {
    return b.age - a.age;
});

Result:

23
22
22
21
21

---

## Sorting Strings

For strings such as names, `localeCompare()` can be used.

Example:

students.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

Result:

Ahmed
Ali
Hamza
Hassan
Usman

---

## Descending String Sorting

Names can also be sorted in descending order.

Example:

students.sort((a, b) => {
    return b.name.localeCompare(a.name);
});

Result:

Usman
Hassan
Hamza
Ali
Ahmed

---

## Using Order Query Parameter

Sorting direction can be controlled using an `order` query parameter.

Example:

GET /students?sort=age&order=desc

The controller can read the values:

const { sort, order } = req.query;

---

## Sorting Logic

Example:

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

---

## Sorting Flow

Request

GET /students?sort=age&order=desc

        ↓

Controller

        ↓

Read req.query

        ↓

Service

        ↓

Sort data

        ↓

Controller

        ↓

Response

---

## Controller and Service

The controller reads the query parameters.

Example:

const { sort, order } = req.query;

const students = studentService.getSortedStudents(sort, order);

The service performs the sorting logic.

---

## JavaScript `sort()`

The `sort()` method sorts the elements of an array.

For numbers, a comparison function should be provided.

Ascending:

(a, b) => a.age - b.age

Descending:

(a, b) => b.age - a.age

For strings:

a.name.localeCompare(b.name)

---

## Sorting Examples

Sort by age:

GET /students?sort=age

Sort by age descending:

GET /students?sort=age&order=desc

Sort by name:

GET /students?sort=name

Sort by name descending:

GET /students?sort=name&order=desc

---

## Common Mistakes

- Using `sort()` without a comparison function for numbers.
- Reversing the comparison logic for ascending and descending order.
- Forgetting that query parameter values come from `req.query`.
- Putting sorting logic directly inside the route.
- Using string comparison logic for numeric values.
- Using an unsupported sort field without handling it.

---

## Best Practices

- Use query parameters for sorting.
- Keep sorting logic inside the service layer.
- Read query parameters in the controller.
- Use comparison functions for numeric sorting.
- Use `localeCompare()` for string sorting.
- Keep supported sort fields clearly defined.

---

## Interview Questions

- What is sorting in an API?
- How can sorting be controlled using query parameters?
- How does JavaScript `sort()` work?
- Why is a comparison function needed for numbers?
- What is the difference between ascending and descending sorting?
- What is `localeCompare()` used for?
- How can an API support both ascending and descending order?
- Where should sorting logic be placed in a layered Express application?

---

## Quick Revision

- Sorting arranges data in a specific order.
- `sort` can specify the field to sort.
- `order` can specify ascending or descending order.
- `a.age - b.age` sorts numbers ascending.
- `b.age - a.age` sorts numbers descending.
- `localeCompare()` can be used for strings.
- Controller reads sorting parameters.
- Service performs sorting logic.