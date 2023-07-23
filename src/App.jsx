
import React from 'react';
import Header from './header';
import { Provider } from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './todolist';
import DoneList from './donelist';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <h1>Todo App with Redux</h1>
      <AddTodo />
      <h2>Todo List</h2>
      <TodoList />
      <h2>Done List</h2>
      <DoneList />
    </div>
  </Provider>
)
  
};

export default App;