# Express.js Request Body

## Introduction

The request body contains data sent by the client to the server.

It is commonly used with POST and other methods when sending data to an API.

---

## Express JSON Middleware

Express needs JSON middleware to read JSON request bodies.

Example:

app.use(express.json());

This allows Express to parse incoming JSON data and make it available through `req.body`.

---

## Reading Request Body

Example:

app.post("/students", (req, res) => {
  console.log(req.body);

  res.json(req.body);
});

If the client sends:

{
  "name": "Ahmed",
  "age": 22
}

The data can be accessed using:

req.body

---

## Sending JSON Data

A client such as Postman can send JSON data in the request body.

Example:

{
  "name": "Ahmed",
  "age": 22
}

The request can be sent to:

POST /students

---

## Multiple POST Routes

Different routes can receive different request bodies.

Example:

app.post("/students", (req, res) => {
  res.json(req.body);
});

app.post("/courses", (req, res) => {
  res.json(req.body);
});

---

## Testing with Postman

To send JSON data using Postman:

1. Select the POST method.
2. Enter the API URL.
3. Open the Body tab.
4. Select raw.
5. Select JSON.
6. Enter the JSON data.
7. Click Send.

Example:

{
  "name": "Ahmed",
  "age": 22
}

---

## Request Parameters Overview

Route parameters:

/students/10

Access using:

req.params

Query parameters:

/students?name=Ahmed

Access using:

req.query

Request body:

{
  "name": "Ahmed",
  "age": 22
}

Access using:

req.body

---

## Best Practices

- Use `express.json()` when accepting JSON request bodies.
- Use meaningful property names.
- Validate incoming data in real applications.
- Use appropriate HTTP methods for different operations.
- Test request bodies using tools such as Postman.

---

## Common Mistakes

- Forgetting `app.use(express.json())`.
- Using `req.query` instead of `req.body`.
- Sending invalid JSON.
- Sending JSON without selecting the correct body type in Postman.
- Forgetting to use the POST method when testing the POST route.

---

## Interview Questions

- What is a request body?
- What is `req.body` in Express.js?
- Why is `express.json()` required?
- How do you receive JSON data in Express.js?
- How can you test a request body using Postman?
- What is the difference between `req.params`, `req.query`, and `req.body`?
- Which HTTP methods commonly use request bodies?

---

## Quick Revision

- Request body contains data sent by the client.
- `req.body` is used to access the request body.
- `express.json()` parses incoming JSON data.
- POST requests commonly use request bodies.
- Postman can be used to test JSON request bodies.
- `req.params` → route parameters.
- `req.query` → query parameters.
- `req.body` → request body.