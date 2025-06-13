const express = require("express");
const app = express();

// to track our calculator total
let total = 0;

app.use(express.json()); // Middleware for parsing JSON data (Must be declared for the app to work)

app.get("/calculator", (req, res) => {
  res.status(200).json({ total });
});

app.post("/calculator", (req, res) => {
  const num = req.body.number;
  const operation = req.body.operation;

  if (operation === "add") {
    total += num;
  } else if (operation === "subtract") {
    total -= num;
  } else if (operation === "multiply") {
    total *= num;
  } else if (operation === "divide") {
    total /= num;
  } else {
    return res.status(400).json({ error: "Invalid operation" });
  }

  res.status(200).json({ total });
});

app.delete("/calculator", (req, res) => {
  total = 0;
  res.status(204).json({ total });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
