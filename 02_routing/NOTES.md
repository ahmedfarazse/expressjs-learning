# Express.js Routing

## Introduction

Routing determines how an Express.js application responds to different HTTP requests and URL paths.

A route consists of an HTTP method, a path, and a route handler.

---

## Basic Routing

```javascript
app.get("/", (req, res) => {
  res.send("Home Page");
});
```

`app.get()` handles a GET request for the specified path.

---

## HTTP Methods

Express provides methods for handling different HTTP requests.

### GET

Used to retrieve data.

```javascript
app.get("/students", (req, res) => {
  res.send("Students Page");
});
```

### POST

Used to create new data.

```javascript
app.post("/students", (req, res) => {
  res.send("Student Created");
});
```

### PUT

Used to update existing data.

```javascript
app.put("/students", (req, res) => {
  res.send("Student Updated");
});
```

### DELETE

Used to delete data.

```javascript
app.delete("/students", (req, res) => {
  res.send("Student Deleted");
});
```

---

## Same Path with Different Methods

The same path can be used with different HTTP methods.

```javascript
app.get("/students", (req, res) => {
  res.send("Get Students");
});

app.post("/students", (req, res) => {
  res.send("Create Student");
});

app.put("/students", (req, res) => {
  res.send("Update Student");
});

app.delete("/students", (req, res) => {
  res.send("Delete Student");
});
```

The HTTP method determines which route is matched.

---

## Route Handler

The function that runs when a request matches a route is called the route handler.

```javascript
(req, res) => {
  res.send("Hello");
}
```

* `req` represents the incoming request.
* `res` represents the response.

---

## Best Practices

* Use meaningful and consistent route paths.
* Use the appropriate HTTP method for each operation.
* Keep route handlers simple.
* Use clear response messages.
* Follow REST API conventions when designing routes.

---

## Common Mistakes

* Using the wrong HTTP method.
* Using an incorrect route path.
* Confusing the HTTP method with the URL path.
* Creating duplicate routes with the same method and path.
* Forgetting to send a response from the route handler.

---

## Interview Questions

* What is routing in Express.js?
* What are the main parts of an Express route?
* What is the difference between GET and POST?
* What is the difference between PUT and DELETE?
* Can the same path have different HTTP methods?
* What is a route handler?
* What are `req` and `res`?
* Why are HTTP methods important in REST APIs?
* What happens when no route matches a request?

---

## Quick Revision

* Routing determines how requests are handled.
* A route contains an HTTP method, path, and handler.
* `app.get()` handles GET requests.
* `app.post()` handles POST requests.
* `app.put()` handles PUT requests.
* `app.delete()` handles DELETE requests.
* The same path can have different HTTP methods.
* The route handler processes the matching request.
