// models/todo.js
const mongoose = require("mongoose"); // Import Mongoose

const todoSchema = new mongoose.Schema({
  // Schema Definition
  text: String,
  isComplete: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema); // Compile todoSchema into a model to perform CRUD operations

module.exports = Todo;
