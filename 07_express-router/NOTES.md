# Express.js Router

## Introduction

Express Router is used to organize routes into separate files.

It helps keep the main application file clean and makes the project easier to maintain.

---

## Creating a Router

A router can be created using `express.Router()`.

Example:

const express = require("express");

const router = express.Router();

---

## Defining Routes with Router

Routes can be created using the router object.

Example:

router.get("/", (req, res) => {
  res.send("Students Page");
});

router.post("/", (req, res) => {
  res.send("Created Student");
});

---

## Exporting a Router

A router can be exported using `module.exports`.

Example:

module.exports = router;

This allows the router to be imported into another file.

---

## Importing a Router

The router can be imported into the main application.

Example:

const studentRouter = require("./routes/students");

---

## Using a Router

Routers can be registered with a URL prefix using `app.use()`.

Example:

app.use("/students", studentRouter);

If the router contains:

router.get("/", (req, res) => {
  res.send("Students Page");
});

The complete route becomes:

GET /students

---

## Multiple Routers

Different resources can have separate routers.

Example:

app.use("/students", studentRouter);
app.use("/courses", coursesRouter);

Project structure:

07-Express-Router/
│
├── app.js
│
└── routes/
    ├── students.js
    └── courses.js

---

## Router Path and Prefix

The router path and application prefix are combined.

Example:

app.use("/students", studentRouter);

router.get("/");

Result:

GET /students

Another example:

app.use("/students", studentRouter);

router.get("/:id");

Result:

GET /students/:id

---

## Benefits of Express Router

- Keeps routes organized.
- Keeps `app.js` cleaner.
- Separates routes by resource.
- Makes larger applications easier to maintain.
- Allows different route files for different resources.

---

## Best Practices

- Keep related routes in the same router.
- Use meaningful router file names.
- Keep `app.js` focused on application setup.
- Use URL prefixes for different resources.
- Export routers properly.

---

## Common Mistakes

- Forgetting `express.Router()`.
- Forgetting `module.exports = router`.
- Using the wrong router path.
- Forgetting to import the router.
- Forgetting to register the router with `app.use()`.
- Confusing the router path with the complete API path.

---

## Interview Questions

- What is Express Router?
- Why do we use `express.Router()`?
- How do you create a router?
- How do you export a router?
- How do you import a router?
- What does `app.use()` do when registering a router?
- How does a router path combine with a route prefix?
- Why is Express Router useful in larger applications?

---

## Quick Revision

- `express.Router()` creates a router.
- Routes can be defined using `router.get()`, `router.post()`, etc.
- Routers are exported using `module.exports`.
- Routers are imported into the main application.
- `app.use()` registers a router.
- A prefix and router path combine to form the complete route.
- Express Router helps organize application routes.