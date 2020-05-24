import React, {Component} from 'react';
import './App.css';
import Todo from './Todo.js'
import Comments from './Comments.js'



function App() {
  const title = <div id="toDoTitle"><h1>📝 Todo App</h1></div>
  return (
    <div>
      {title}
      <Todo></Todo>
      <div><Comments></Comments></div>
    </div>
  );
}
export default App;
