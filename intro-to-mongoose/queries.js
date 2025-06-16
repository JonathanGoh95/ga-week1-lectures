/*------------------------------- Starter Code -------------------------------*/
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const Todo = require("./models/todo.js");
const User = require("./models/user.js");

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries();

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log("Queries running.");
  // The functions calls to run queries in our db will go here as we write them.
  // await createSubtask();
  // await createUser();
  await assignTodo();
  // await createTodo(); // CREATE (C)
  // await findTodos(); // READ (R)
  // await updateTodo(); // UPDATE (U)
  // await deleteTodo(); // DELETE (D)
};

connect();
/*------------------------------ Query Functions -----------------------------*/
const createUser = async () => {
  const userData = {
    name: "Alex",
    email: "alex@mail.com",
  };
  const user = await User.create(userData);
  console.log("New user:", user);
};

const assignTodo = async () => {
  const todoId = "684fbb87a960f8edcdf97662";
  const userId = "684fd3940b0087d62dd47671";

  const updatedTodo = await Todo.findByIdAndUpdate(
    todoId,
    { assignee: userId },
    { new: true }
  );

  console.log("Updated document:", updatedTodo);
};

const createSubtask = async () => {
  // Assume that the todo we want to create a
  // sub-task for has the following id:
  const todoId = "684fbb87a960f8edcdf97662";
  // Look up the todo by id, assign the returned object to `todo`
  const todo = await Todo.findById(todoId);
  const subtaskData = {
    text: "Learn how props work",
    isComplete: false,
  };

  // Push the new sub-task data into the subtasks array on the todo:
  const subtask = todo.subtasks.push(subtaskData);
  // Save the parent document:
  await todo.save();
  console.log("Modified todo:", todo);
};

// CREATE (C) Function -> Status Code: 201 in Express
const createTodo = async () => {
  const todoData = [
    /*     {
      text: "Learn JS",
      isComplete: false,
    },
    {
      text: "Learn CSS",
      isComplete: false,
    },
    {
      text: "Learn HTML",
      isComplete: false,
    }, */
    {
      text: "learn React",
      isComplete: false,
    },
    /* {
      text: "Learn Mongoose",
      isComplete: true,
    }, */
  ];

  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

// READ (R) Function -> Status Code: 200 in Express
const findTodos = async () => {
  const todos = await Todo.find({});
  // const todos = await Todo.find({}).sort({ text: "asc" }); // Sort by text field in ascending/descending order
  // const todos = await Todo.find({}).limit(3);  // Limit Results to 3 (Argument Value)
  // const todos = await Todo.find({}).skip(3); // Skips the first 3 (Argument Value) Results
  console.log("All todos:", todos);
};

// UPDATE (U) Function
const updateTodo = async () => {
  const id = "684f8ac540739eddae1a6702";
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { isComplete: false },
    { new: true } // Returns the modified document instead of the original
  );
  console.log("Updated todo:", updatedTodo);
};

// DELETE (D) Function -> Status Code: 204 in Express
const deleteTodo = async () => {
  const id = "684f8ac540739eddae1a6702";
  const removedTodo = await Todo.findByIdAndDelete(id);
  console.log("Removed todo:", removedTodo);
};
