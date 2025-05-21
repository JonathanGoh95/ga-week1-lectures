// src/App.jsx
// Function names in JSX files must use Pascal Case, else fails
const App = () => {
// 'Return' can only return 'one' parent element, hence <></> (React Fragment) can be used to wrap multiple elements within.
const todo = {text: 'A brand new task', done: true};
const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: true},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

// Using the 'map' array iterator to loop through the array elements in React
const todoList = todos.map((todo)=><li key={todo.text}>{todo.done? `Task Completed: ${todo.text}` : `Task Not Yet Completed: ${todo.text}`}</li>);

return (
    <>
      <h1 className="testClass">Javascript in JSX</h1>
      {/* Only ternary expressions can be rendered within {}. If...else statements will NOT work within 'return'.*/}
      
      <h2>Conditional Rendering</h2>
      <p>{todo.done? `Task Completed: ${todo.text}`: todo.text}</p>
      
      <h2>Looping with JSX</h2>
      <ul>
        {todoList}
      </ul>
    </>
  );
};

export default App;