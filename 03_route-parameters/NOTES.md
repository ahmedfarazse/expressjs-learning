# Express.js Route Parameters

## Introduction

Route parameters are dynamic values added to a URL path.

They are useful for accessing specific resources using values such as IDs.

---

## Basic Route Parameter

app.get("/students/:id", (req, res) => {
  res.send(`Student ID: ${req.params.id}`);
});

`:id` is a route parameter.

For:

/students/10

The value can be accessed using:

req.params.id


---

## `req.params`

Express stores route parameters inside `req.params`.

app.get("/students/:id", (req, res) => {
  res.json(req.params);
});


For:

/students/10


Output:

{
  "id": "10"
}


---

## Multiple Route Parameters

A route can contain multiple parameters.

app.get("/students/:studentId/courses/:courseId", (req, res) => {
  res.json(req.params);
});

For:

/students/10/courses/5

Output:

{
  "studentId": "10",
  "courseId": "5"
}

---

## Route Parameter Values

Route parameter values are received as strings.

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  res.send(`Student ID: ${id}`);
});

`Number()` can be used when a numeric value is required.

---

## Static vs Dynamic Routes

### Static Route

app.get("/students", (req, res) => {
  res.send("Students Page");
});

This handles only:

/students


### Dynamic Route

app.get("/students/:id", (req, res) => {
  res.send(`Student ID: ${req.params.id}`);
});

This can handle:

/students/1
/students/10
/students/25


---

## Best Practices

- Use meaningful parameter names.
- Use route parameters to identify specific resources.
- Keep route paths simple and readable.
- Convert parameter values when a number is required.
- Validate parameter values when necessary.

---

## Common Mistakes

- Forgetting `:` before the parameter name.
- Using `req.query` instead of `req.params`.
- Writing `(res, req)` instead of `(req, res)`.
- Assuming route parameters are numbers automatically.
- Using the wrong parameter name.

---

## Interview Questions

- What are route parameters?
- How do you define a route parameter in Express.js?
- What is `req.params`?
- What is the difference between a static route and a dynamic route?
- Can a route have multiple parameters?
- Are route parameter values strings or numbers?
- How can you convert a route parameter to a number?

---

## Quick Revision

- Route parameters are dynamic values in a URL path.
- `:id` defines a route parameter.
- `req.params` is used to access route parameters.
- A route can contain multiple parameters.
- Route parameter values are strings by default.
- `Number()` can convert a route parameter to a number.
