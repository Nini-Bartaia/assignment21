 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id,
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.done ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          <button onClick={() => handleToggleTodo(todo.id)}>
            {todo.done ? 'Undone' : 'Done'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
