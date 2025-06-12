// Import Express
const express = require("express");
const morgan = require("morgan");

// Create an Express app
const app = express();

// Use Morgan middleware with the 'dev' option for concise output
app.use(morgan("dev"));
npm;
// Define routes here (we'll add them soon)
app.get("/", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

/* app.get("/:itemNumber", (req, res) => {
  // Accessing the parameter
  console.log(req.params.itemNumber); // Output could be 123, 456, etc.

  // Sending a response with the parameter
  res.send(`<h1>Item ${req.params.itemNumber}</h1>`);
}); */

app.get("/greet/:name", (req, res) => {
  res.send(`<h1>Hello, ${req.params.name}!</h1>`);
});

app.get("/hello", (req, res) => {
  // Accessing query parameters from the request
  const name = req.query.name;
  const age = req.query.age;

  // Using the query parameters to customize the response
  res.send(`<h1>Hello there, ${name}! I hear you are ${age} years old!</h1>`);
});

// Listen for requests on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
