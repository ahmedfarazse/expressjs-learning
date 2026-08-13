# Express.js Introduction

## Introduction

Express.js is a web framework built on top of Node.js that makes it easier to build web servers and APIs.

It provides simple methods for handling HTTP requests, responses, and routes.

---

## Installing Express

Initialize the Node.js project:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

---

## Importing Express

```javascript
const express = require("express");
```

This imports the Express package into the application.

---

## Creating an Express Application

```javascript
const app = express();
```

`express()` creates an Express application.

The `app` object is used to define routes and configure the application.

---

## GET Route

```javascript
app.get("/", (req, res) => {
  res.send("Hello Express");
});
```

`app.get()` handles a GET request for a specific route.

* `req` represents the incoming request.
* `res` represents the response.
* `res.send()` sends a response to the client.

---

## Multiple Routes

```javascript
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/students", (req, res) => {
  res.send("Student Details Page");
});
```

Different URL paths can have different route handlers.

---

## Starting the Server

```javascript
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

`app.listen()` starts the Express server on the specified port.

The application can be accessed at:

```text
http://localhost:3000
```

---

## Request Flow

```text
Client
   ↓
HTTP Request
   ↓
Express Route
   ↓
Route Handler
   ↓
HTTP Response
   ↓
Client
```
---

## Best Practices

* Keep routes simple and readable.
* Use meaningful route paths.
* Use the correct HTTP method for each operation.
* Keep the project organized as it grows.
* Test every route after creating it.

---

## Common Mistakes

* Forgetting to install Express.
* Running the project from the wrong directory.
* Forgetting to start the server with `app.listen()`.
* Using the wrong route path.
* Forgetting to send a response.
* Confusing HTTP methods such as GET and POST.

---

## Interview Questions

* What is Express.js?
* Why is Express.js used with Node.js?
* Does Express.js replace Node.js?
* What does `express()` do?
* What is `app.get()`?
* What are `req` and `res`?
* What does `res.send()` do?
* What does `app.listen()` do?
* How can you create multiple routes in Express.js?
* What is the difference between an HTTP method and a route path?

---

## Quick Revision

* Express.js is a web framework built on Node.js.
* `express()` creates an Express application.
* `app.get()` handles GET requests.
* `req` represents the request.
* `res` represents the response.
* `res.send()` sends a response.
* `app.listen()` starts the server.
* Different paths can have different routes.
