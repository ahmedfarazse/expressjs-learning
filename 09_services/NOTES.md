# Express.js Services

## Introduction

A service is used to keep the business logic of an application separate from controllers.

The service performs the actual operation, while the controller handles the request and response.

---

## Why Use Services?

As an application grows, putting all business logic inside controllers makes them difficult to maintain.

Services help separate responsibilities and keep the code organized.

---

## Creating a Service

A service can contain functions that perform specific operations.

Example:

const getStudents = () => {
  return [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ali" }
  ];
};

---

## Exporting a Service

Service functions can be exported using `module.exports`.

Example:

module.exports = {
  getStudents
};

---

## Importing a Service

A service can be imported into a controller.

Example:

const studentService = require("../services/studentsService");

---

## Using a Service in a Controller

The controller can call the service function.

Example:

const getStudents = (req, res) => {
  const students = studentService.getStudents();

  res.json(students);
};

The service returns the data and the controller sends it as a response.

---

## Router, Controller, and Service

Each layer has a different responsibility.

### Router

The router defines the endpoint and sends the request to the controller.

Example:

router.get("/", getStudents);

### Controller

The controller handles the request and response.

Example:

const getStudents = (req, res) => {
  const students = studentService.getStudents();

  res.json(students);
};

### Service

The service contains the business logic.

Example:

const getStudents = () => {
  return [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ali" }
  ];
};

---

## Request Flow

The request follows this flow:

Request
   ↓
Router
   ↓
Controller
   ↓
Service
   ↓
Controller
   ↓
Response

Example:

GET /students
      ↓
studentsRouter.js
      ↓
getStudents()
      ↓
studentsService.getStudents()
      ↓
Student Data
      ↓
res.json()
      ↓
Response

---

## Benefits of Services

- Separates business logic from controllers.
- Keeps controllers cleaner.
- Makes the project easier to maintain.
- Improves code organization.
- Makes service functions reusable.

---

## Best Practices

- Keep business logic inside services.
- Keep controllers focused on request and response handling.
- Use meaningful service function names.
- Keep related service functions together.
- Maintain a consistent project structure.

---

## Common Mistakes

- Forgetting to export service functions.
- Forgetting to import the service into the controller.
- Putting all business logic inside the controller.
- Calling `req.json()` instead of `res.json()`.
- Using inconsistent file and folder naming.

---

## Interview Questions

- What is a service in an Express.js application?
- Why are services used?
- What is the difference between a controller and a service?
- How do you import a service into a controller?
- How do you export service functions?
- What type of logic should be placed inside a service?
- How does a request flow through router, controller, and service?

---

## Quick Revision

- Router handles routing.
- Controller handles request and response.
- Service handles business logic.
- Services keep controllers clean.
- Services can be imported into controllers.
- Service functions should be exported.
- Router → Controller → Service → Controller → Response.