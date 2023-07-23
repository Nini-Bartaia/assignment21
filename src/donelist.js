 
import React from 'react';
import { useSelector } from 'react-redux';

const DoneList = () => {
  const doneTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.done)
  );

  return (
    <ul>
      {doneTodos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: 'line-through',
            }}
          >
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DoneList;
