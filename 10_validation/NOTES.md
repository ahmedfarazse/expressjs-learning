# Express.js Validation

## Introduction

Validation is the process of checking incoming data before processing it.

It helps prevent invalid or incomplete data from being accepted by the application.

---

## Why Use Validation?

Clients can send missing, empty, or invalid data.

Example:

{
  "name": "",
  "age": "abc"
}

Validation checks whether the received data meets the required conditions.

---

## Required Fields

A field can be checked to make sure it exists.

Example:

const { name, age } = req.body;

if (!name || !age) {
  return res.status(400).json({
    message: "Name and age are required"
  });
}

The `||` operator is used because validation should fail if either required field is missing.

---

## Why Use `||`?

Consider:

if (!name || !age)

The condition becomes true when:

- name is missing
- age is missing
- both are missing

This means the request is rejected if any required field is missing.

---

## Validating Data Type

Data can also be checked for the correct type.

Example:

if (typeof age !== "number") {
  return res.status(400).json({
    message: "Age must be a number"
  });
}

This checks whether `age` is a number.

---

## HTTP Status Code for Validation

Invalid client data can be returned with:

400 Bad Request

Example:

return res.status(400).json({
  message: "Name and age are required"
});

---

## Successful Validation

If the validation passes, the application can continue processing the request.

Example:

res.status(201).json({
  message: "Student created",
  student: req.body
});

---

## Validation and Controllers

Basic request validation can be performed in the controller because the controller receives the HTTP request.

Example:

const createStudent = (req, res) => {

  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "Name and age are required"
    });
  }

  res.status(201).json({
    message: "Student created",
    student: req.body
  });
};

---

## Validation and Services

The service should focus on business logic instead of directly handling HTTP objects such as `req` and `res`.

Example:

const createStudent = (name, age) => {
  return {
    name,
    age
  };
};

The controller can validate the request and then pass the required values to the service.

---

## Validation Flow

Request
   ↓
Controller
   ↓
Validate Data
   ↓
Invalid → 400 Response

Valid
   ↓
Service
   ↓
Business Logic
   ↓
Response

---

## Best Practices

- Validate incoming data before processing it.
- Check required fields.
- Check data types when necessary.
- Return appropriate status codes.
- Keep validation logic clear and readable.
- Do not pass `req` and `res` directly into services when they are not needed.

---

## Common Mistakes

- Accepting data without validation.
- Using `&&` when any missing field should cause validation to fail.
- Forgetting `return` before the validation response.
- Checking only whether a property exists without checking its type.
- Putting HTTP response logic inside services.
- Using incorrect status codes for invalid client data.

---

## Interview Questions

- What is validation?
- Why is validation important?
- How do you check required fields in Express.js?
- Why is `||` used when checking multiple required fields?
- What status code is commonly used for invalid request data?
- How can you check the type of a value in JavaScript?
- Where can request validation be performed?
- Why should services avoid directly handling `req` and `res`?

---

## Quick Revision

- Validation checks incoming data before processing.
- Required fields can be checked using conditions.
- `||` is useful when any missing field should cause failure.
- `typeof` can be used to check data types.
- `400 Bad Request` is commonly used for invalid client data.
- Controllers can validate incoming HTTP request data.
- Services should focus on business logic.