# Express.js Pagination

## Introduction

Pagination is the process of dividing a large amount of data into smaller pages.

Instead of returning all records at once, an API returns a limited number of records for each page.

---

## Query Parameters

Pagination can be controlled using query parameters.

Example:

GET /students?page=2&limit=3

Here:

- `page` represents the page number.
- `limit` represents the number of records per page.

---

## Reading Query Parameters

Query parameters can be accessed using `req.query`.

Example:

const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 3;

`Number()` converts the query parameter from a string into a number.

Default values are used when `page` or `limit` is not provided.

---

## Calculating Skip

The starting position can be calculated using:

const skip = (page - 1) * limit;

Example:

page = 2
limit = 3

skip = (2 - 1) * 3
skip = 3

This means page 2 starts from index 3.

---

## Using `slice()`

JavaScript's `slice()` method can be used to select the required records.

Example:

const result = students.slice(skip, skip + limit);

If:

page = 2
limit = 3

Then:

slice(3, 6)

returns three records.

---

## Pagination Example

Suppose the data contains:

1. Ahmed
2. Ali
3. Usman
4. Hamza
5. Hassan
6. Bilal
7. Adeel
8. Omer

Request:

GET /students?page=2&limit=3

Result:

4. Hamza
5. Hassan
6. Bilal

---

## Pagination Flow

Request:

GET /students?page=2&limit=3

        ↓

Controller

        ↓

Read page and limit

        ↓

Service

        ↓

Calculate skip

        ↓

Use slice()

        ↓

Return paginated data

        ↓

Response

---

## Controller and Service

The controller reads the query parameters.

Example:

const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 3;

The service performs the pagination calculation.

Example:

const getPaginatedStudents = (page, limit) => {

    const students = getStudents();

    const skip = (page - 1) * limit;

    return students.slice(skip, skip + limit);
};

---

## Common Pagination Requests

First page:

GET /students?page=1&limit=3

Second page:

GET /students?page=2&limit=3

Third page:

GET /students?page=3&limit=3

---

## Benefits of Pagination

- Prevents returning too many records at once.
- Reduces the amount of data returned in one response.
- Makes large datasets easier to browse.
- Improves API efficiency when working with large amounts of data.

---

## Common Mistakes

- Hard-coding `page` and `limit`.
- Forgetting to read values from `req.query`.
- Forgetting to convert query parameters to numbers.
- Using the wrong skip calculation.
- Forgetting that array indexes start from 0.
- Putting request and response handling directly inside the service.

---

## Best Practices

- Use query parameters for pagination.
- Provide sensible default values.
- Convert query parameter values to numbers.
- Keep pagination logic inside the service layer.
- Keep request and response handling inside the controller.

---

## Interview Questions

- What is pagination?
- Why is pagination used in APIs?
- How are page and limit passed to an API?
- What is `req.query`?
- Why do we use `Number()` with query parameters?
- How is the skip value calculated?
- Why is `(page - 1) * limit` used?
- How can `slice()` be used for pagination?

---

## Quick Revision

- Pagination divides data into pages.
- `page` determines which page to return.
- `limit` determines how many records to return.
- Query parameters are accessed through `req.query`.
- `skip = (page - 1) * limit`.
- `slice(skip, skip + limit)` selects the required records.
- Controller reads query parameters.
- Service performs pagination logic.