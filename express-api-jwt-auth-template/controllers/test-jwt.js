// controllers/test-jwt.js

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/sign-token", (req, res) => {
  //   res.json({ message: "You are authorized!" });
  const user = {
    _id: 1,
    username: "test",
    password: "test",
  };
  // Create a token using the sign method with payload and secretOrPrivateKey arguments
  const token = jwt.sign({ user }, process.env.JWT_SECRET);

  // Send the token back to the client
  res.json({ token });
});

router.post("/verify-token", (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Add in verify method
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json({ decoded });
  } catch (err) {
    res.status(401).json({ err: "Invalid token." });
  }
});

module.exports = router;
