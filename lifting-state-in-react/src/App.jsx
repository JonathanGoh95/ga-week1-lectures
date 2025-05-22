// src/App.jsx

/* import IncrementButton from './components/IncrementButton.jsx';
import { useState } from 'react';

const App = () => {
const [count, setCount] = useState(0);

const addOne = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <IncrementButton addOne={addOne} />
    </>
  );
};
 */

import NewTodo from './components/NewTodo.jsx';
import TodoList from './components/TodoList.jsx';
import { useState } from "react";

const App = () => {
  const [todos,setTodos] = useState([]);

  const addTodo = (newTodo) => {
    console.log(([...todos,newTodo]));
    setTodos([...todos,newTodo]);
  };

  return (
    <>
      <h1>To-do App</h1>
      <ul>
        <NewTodo addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </ul>
    </>
  );
};

export default App;
