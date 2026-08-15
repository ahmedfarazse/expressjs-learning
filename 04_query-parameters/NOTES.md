# Express.js Query Parameters

## Introduction

Query parameters are values added to a URL after `?`.

They are commonly used for searching, filtering, sorting, and passing optional information to a route.

---

## Basic Query Parameter

Example URL:

/students?name=Ahmed

Query parameters can be accessed using `req.query`.

Example:

app.get("/students", (req, res) => {
  res.json(req.query);
});

Output:

{
  "name": "Ahmed"
}

---

## Multiple Query Parameters

Multiple query parameters are separated using `&`.

Example URL:

/students?name=Ahmed&age=22

Example:

app.get("/students", (req, res) => {
  res.json(req.query);
});

Output:

{
  "name": "Ahmed",
  "age": "22"
}

---

## Accessing Query Parameters

Individual query parameters can be accessed using their names.

Example:

app.get("/students", (req, res) => {
  res.send(`Name: ${req.query.name}, Age: ${req.query.age}`);
});

---

## Query Parameters in APIs

Query parameters are commonly used for:

- Searching
- Filtering
- Sorting
- Passing optional values

Example:

/products?category=mobile&brand=Samsung

---

## Route Parameters vs Query Parameters

### Route Parameter

URL:

/students/10

Access using:

req.params.id

### Query Parameter

URL:

/students?id=10

Access using:

req.query.id

---

## Best Practices

- Use meaningful query parameter names.
- Use query parameters for optional information.
- Keep URLs readable.
- Validate query parameter values when necessary.
- Do not confuse query parameters with route parameters.

---

## Common Mistakes

- Using `req.params` instead of `req.query`.
- Forgetting `?` before the first query parameter.
- Forgetting `&` between multiple query parameters.
- Assuming query parameter values are numbers automatically.
- Confusing query parameters with route parameters.

---

## Interview Questions

- What are query parameters?
- What is `req.query`?
- How do you access query parameters in Express.js?
- How do you pass multiple query parameters?
- What is the difference between `req.params` and `req.query`?
- Where are query parameters commonly used?
- Are query parameter values automatically converted to numbers?

---

## Quick Revision

- Query parameters are added after `?`.
- `req.query` is used to access them.
- Multiple query parameters are separated by `&`.
- Query parameters are commonly used for search, filtering, and sorting.
- Route parameters use `req.params`.
- Query parameters use `req.query`.