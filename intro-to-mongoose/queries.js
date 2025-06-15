/*------------------------------- Starter Code -------------------------------*/
const Todo = require("./models/todo.js");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

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
  // await createTodo();
  // await findTodos();
  // await updateTodo();
  await deleteTodo();
};

connect();
/*------------------------------ Query Functions -----------------------------*/
const createTodo = async () => {
  const todoData = [
    {
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
    },
  ];

  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};

const updateTodo = async () => {
  const id = "6573745144784f6dc034e1df";
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { isComplete: true },
    { new: true }
  );
  console.log("Updated todo:", updatedTodo);
};

const deleteTodo = async () => {
  const id = "6573745144784f6dc034e1df";
  const removedTodo = await Todo.findByIdAndDelete(id);
  console.log("Removed todo:", removedTodo);
};
