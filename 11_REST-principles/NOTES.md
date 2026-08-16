# REST Principles

## Introduction

REST stands for Representational State Transfer.

REST is an architectural style used for designing APIs.

Express.js can be used to build REST-style APIs.

---

## Resources

REST APIs represent data as resources.

Examples:

/students
/courses
/products
/users

The URL represents the resource rather than the action.

---

## HTTP Methods

HTTP methods describe what operation should be performed on a resource.

### GET

Used to retrieve data.

Example:

GET /students

---

### POST

Used to create a new resource.

Example:

POST /students

---

### PUT

Used to update an existing resource.

Example:

PUT /students/10

---

### DELETE

Used to delete a resource.

Example:

DELETE /students/10

---

## Resource Based URLs

REST style APIs use resource names in URLs.

Avoid action based URLs such as:

/getStudents
/createStudent
/deleteStudent

Prefer resource based URLs:

GET /students
POST /students
DELETE /students/10

The HTTP method describes the action while the URL identifies the resource.

---

## Route Parameters

Route parameters can identify a specific resource.

Example:

GET /students/:id

Request:

GET /students/10

Here:

10 is the student ID.

---

## REST API Example

A students API can use:

GET    /students
GET    /students/:id
POST   /students
PUT    /students/:id
DELETE /students/:id

---

## Statelessness

REST APIs are generally stateless.

Each request should contain the information required to process that request.

The server should not depend on previous requests to understand the current request.

---

## Separation of Responsibilities

A REST style application can separate different responsibilities.

Example:

Request
   ↓
Router
   ↓
Controller
   ↓
Service
   ↓
Response

This separation makes the application easier to organize and maintain.

---

## HTTP Status Codes

REST APIs use HTTP status codes to communicate the result of a request.

Examples:

200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

---

## Common REST Principles

- Resources are represented through URLs.
- HTTP methods describe operations.
- URLs should represent resources rather than actions.
- Requests should be stateless.
- HTTP status codes communicate request results.
- APIs should have a consistent structure.

---

## Common Mistakes

- Using action names in URLs.
- Using different URL patterns for the same resource.
- Using the wrong HTTP method.
- Returning inappropriate status codes.
- Mixing unrelated resources in the same endpoint.

---

## Interview Questions

- What does REST stand for?
- What is a REST API?
- What is a resource in REST?
- Why are HTTP methods used?
- What is the difference between PUT and POST?
- Why should URLs represent resources instead of actions?
- What does stateless mean in REST?
- Why are HTTP status codes important in REST APIs?

---

## Quick Revision

- REST = Representational State Transfer.
- URLs represent resources.
- HTTP methods describe operations.
- GET retrieves data.
- POST creates data.
- PUT updates data.
- DELETE removes data.
- REST APIs are generally stateless.
- HTTP status codes communicate request results.