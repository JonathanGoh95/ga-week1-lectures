// src/components/TodoList.jsx

const TodoList = ({todos}) => {
//   const tempTodos = ['first', 'second', 'third'];
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
};

export default TodoList;
