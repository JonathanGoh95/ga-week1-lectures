// src/components/TodoList.jsx

const TodoList = (props) => {
//   const tempTodos = ['first', 'second', 'third'];
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
};

export default TodoList;
