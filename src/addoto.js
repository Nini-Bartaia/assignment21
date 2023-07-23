 
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: Date.now(),
          text: inputText,
          done: false,
        },
      });
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
