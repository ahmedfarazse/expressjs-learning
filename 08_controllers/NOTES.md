# Express.js Controllers

## Introduction

Controllers are used to keep the logic for handling requests separate from route definitions.

They help keep route files clean and organized.

---

## Why Use Controllers?

Instead of writing the complete request handling logic inside the route file, the logic can be moved into controller functions.

This makes the application easier to organize and maintain.

---

## Creating a Controller

A controller can be created as a function.

Example:

const getStudents = (req, res) => {
  res.send("Students Page");
};

Another controller:

const createStudent = (req, res) => {
  res.json(req.body);
};

---

## Exporting Controllers

Multiple controller functions can be exported using `module.exports`.

Example:

module.exports = {
  getStudents,
  createStudent
};

---

## Importing Controllers

Controllers can be imported into a route file.

Example:

const {
  getStudents,
  createStudent
} = require("../controller/studentsController");

---

## Using Controllers in Routes

The controller functions can be passed directly to route methods.

Example:

router.get("/", getStudents);

router.post("/", createStudent);

The router now forwards the request to the appropriate controller.

---

## Controller and Router Responsibilities

### Router

The router defines the endpoint and decides which controller should handle the request.

Example:

router.get("/", getStudents);

### Controller

The controller contains the request handling logic.

Example:

const getStudents = (req, res) => {
  res.send("Students Page");
};

---

## Request Flow

The request follows this flow:

Request
   ↓
app.js
   ↓
Router
   ↓
Controller
   ↓
Response

Example:

POST /students
   ↓
students.js
   ↓
createStudent()
   ↓
req.body
   ↓
JSON Response

---

## Project Structure

Example:

08-Controllers/
│
├── app.js
│
├── routes/
│   └── students.js
│
└── controller/
    └── studentsController.js

---

## Benefits of Controllers

- Keeps route files clean.
- Separates routing from request handling logic.
- Makes the project easier to maintain.
- Makes code organization better.
- Makes controllers reusable.

---

## Best Practices

- Keep controllers focused on request handling.
- Use meaningful controller function names.
- Keep routing logic inside route files.
- Keep related controller functions together.
- Use a consistent folder naming convention.

---

## Common Mistakes

- Writing all business logic directly inside route files.
- Forgetting to export controller functions.
- Forgetting to import controllers.
- Using incorrect controller paths.
- Importing unused packages inside controllers.
- Mixing routing logic with controller logic.

---

## Interview Questions

- What is a controller in Express.js?
- Why are controllers used?
- What is the difference between a router and a controller?
- How do you export controller functions?
- How do you import controllers into a route file?
- How does a request travel from the router to the controller?
- Why is separating routes and controllers useful?

---

## Quick Revision

- Router defines endpoints.
- Controller handles request logic.
- Controllers are usually functions.
- Controllers can be exported using `module.exports`.
- Controllers are imported into route files.
- Router forwards requests to controllers.
- Separating routers and controllers keeps the project organized.