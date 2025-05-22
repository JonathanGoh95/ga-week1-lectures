// src/components/NewTodo.jsx

import { useState } from "react";

const NewTodo = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Creating a new to-do...");
    props.addTodo(newTodo);
    setNewTodo('');
  };

const [newTodo, setNewTodo] = useState('');

const handleChange = (event) => {
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
