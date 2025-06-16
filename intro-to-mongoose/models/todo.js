// models/todo.js
const mongoose = require("mongoose"); // Import Mongoose

const { model, Schema } = mongoose;

const subtaskSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const todoSchema = new Schema({
  // Schema (Blueprint) Definition
  text: String,
  isComplete: Boolean,
  //subtasks: [subtaskSchema], // embedded subtask schema

  // Add a new field to reference a User:
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
});

// Compile todoSchema into a model to perform CRUD operations
const Todo = model("Todo", todoSchema);

module.exports = Todo;
