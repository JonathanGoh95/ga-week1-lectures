// src/components/NewTodo.jsx

import { useState } from "react";

const NewTodo = ({addTodo}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Creating a new to-do...");
    // Adds a new todo upon clicking the submit button, after the newTodo state has been updated.
    addTodo(newTodo);
    // Clears the input field after clicking the submit button
    setNewTodo('');
  };

const [newTodo, setNewTodo] = useState('');

const handleChange = (event) => {
    // Updates the state as and when the user types in the input field
    setNewTodo(event.target.value);
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input 
      id="todoInput" 
      type="text" 
      name="todo"
      value={newTodo} 
      onChange={handleChange}/>
      <button type="submit">Create to-do</button>
    </form>
  );
};

export default NewTodo;
