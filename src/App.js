import React, {Component} from 'react';
import './App.css';
import Todo from './Todo.js'



function App() {
  const title = <div id="toDoTitle"><h1>📝 Todo App</h1></div>
  return (
    <div>
      {title}
      <Todo></Todo>
    </div>
  );
}
export default App;
