# Express.js Middleware

## Introduction

Middleware is a function that runs between the incoming request and the final route response.

Middleware can process the request before it reaches the route handler.

---

## Basic Middleware Structure

A middleware function receives three arguments:

(req, res, next)

- `req` represents the incoming request.
- `res` represents the response.
- `next` passes control to the next middleware or route.

Example:

const logger = (req, res, next) => {
  console.log("Request Received");
  next();
};

---

## Using Middleware

The `app.use()` method is used to register middleware.

Example:

app.use(logger);

After this, the logger middleware runs for incoming requests.

---

## `next()`

`next()` passes control to the next middleware or route handler.

Example:

const logger = (req, res, next) => {
  console.log("Request Received");
  next();
};

If `next()` is not called and the middleware does not send a response, the request will not continue to the next handler.

---

## Logging Requests

Middleware can be used to log request information.

Example:

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

For example:

GET /
GET /about
POST /students

---

## JSON Middleware

`express.json()` is also middleware.

Example:

app.use(express.json());

It allows Express to parse incoming JSON request bodies and make the data available through:

req.body

---

## Middleware Flow

The request follows a flow:

Request
   ↓
Middleware
   ↓
next()
   ↓
Route Handler
   ↓
Response

---

## Common Uses of Middleware

- Logging
- Authentication
- Authorization
- Request validation
- Parsing request data
- Error handling

---

## Best Practices

- Keep middleware focused on one responsibility.
- Call `next()` when the request should continue.
- Use meaningful middleware names.
- Register middleware before the routes that need it.
- Avoid putting unrelated logic inside middleware.

---

## Common Mistakes

- Forgetting `next()`.
- Using the wrong middleware order.
- Not sending a response or calling `next()`.
- Confusing middleware with route handlers.
- Forgetting to register middleware with `app.use()`.

---

## Interview Questions

- What is middleware in Express.js?
- What are `req`, `res`, and `next`?
- What does `next()` do?
- How do you register middleware in Express.js?
- What is `app.use()`?
- Is `express.json()` middleware?
- What are common uses of middleware?
- What happens if `next()` is not called?

---

## Quick Revision

- Middleware runs between the request and route handler.
- Middleware receives `req`, `res`, and `next`.
- `app.use()` registers middleware.
- `next()` passes control forward.
- `express.json()` is middleware.
- Middleware can be used for logging, validation, authentication, and request processing.





















