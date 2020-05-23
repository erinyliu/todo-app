import React, {Component} from 'react';
import {Button, Card, Form, Input, Icon, Modal} from 'semantic-ui-react'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
    };
  }
  componentDidMount = () => {

  }
  addTask = () => {

  }

  updateTask = () => {
    
  }

  removeTask = () => {

  }



  render() {
    return (
      <div className="taskListContainer">This will be the container for the task list.</div>
    )
  }
}
