// /controllers/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const saltRounds = 12;

// Sign Up POST Function
router.post("/sign-up", async (req, res) => {
  try {
    // Check if the username is already taken
    const userInDatabase = await User.findOne({ username: req.body.username });
    // If username is taken, return an error
    if (userInDatabase) {
      return res.status(409).json({ err: "Username already taken." });
    }
    // Create a new user with hashed password
    const user = await User.create({
      username: req.body.username,
      hashedPassword: bcrypt.hashSync(req.body.password, saltRounds),
    });
    // Construct the payload
    const payload = { username: user.username, _id: user._id };
    // Create the token, attaching the payload
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);
    // Send the token instead of the user
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

// Sign In POST Function
router.post("/sign-in", async (req, res) => {
  try {
    // Checks and obtains the user from the database
    const user = await User.findOne({ username: req.body.username });
    // If username is not found, return an error
    if (user === null) {
      return res.status(401).json({ err: "Invalid username." });
    }
    //Check passwords using the bcrypt compare sync function
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.hashedPassword
    );
    // If the password is incorrect, return an error
    if (!isPasswordCorrect) {
      return res.status(401).json({ err: "Invalid password." });
    }
    // Construct the payload
    const payload = { username: user.username, _id: user._id };
    // Create the token, attaching the payload
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);
    // Send the token instead of the message
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
