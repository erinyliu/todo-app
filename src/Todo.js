import React, {Component} from 'react';
import {Button, Form, Input, Icon, Modal, Card, Header} from 'semantic-ui-react'

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      taskList: []
    };
  }

  // on load get the task list
  componentDidMount = () => {
    this.renderTasks()
  };

  onChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  onSubmit = () => {
    let taskList = JSON.parse(localStorage.getItem('taskList'))
    if (taskList == null) {
      taskList = []
    }
    taskList.slice()
    let taskObject = {task: this.state.task}
    taskList.push(taskObject)
    localStorage.setItem('taskList', JSON.stringify(taskList))
    this.setState({
      task: "",
      taskList: taskList
    })
  };

  removeTask = (index) => {
    let taskList = JSON.parse(localStorage.getItem('taskList'))
    taskList.splice(index, 1)
    localStorage.setItem('taskList', JSON.stringify(taskList))
    this.renderTasks()
  }

  renderTasks() {
    let tasks = JSON.parse(localStorage.getItem('taskList'))
    if (tasks != null) {
      return (
        <div>
          {tasks.map((task, index) => {
            return (
              <div>
              <Card.Group>
              <Card className="taskCard" fluid color='blue' inline>
                <Card.Content>
                  <Card.Header>⭐️  {task.task}</Card.Header>
                  <Card.Meta textAlign='right'>
                    <div className="deleteTask">
                      <Button onClick={()=>this.removeTask(task.index)} negative compact icon>
                        <Icon name='remove'/>
                      </Button>
                    </div>
                  </Card.Meta>
                </Card.Content>
              </Card>
              </Card.Group>
              </div>
            )
          })}
        </div>
      )
    }
}



  render() {
    return (
        <div className="toDoContainer">
          <div className="taskFormContainer">
          <Form onSubmit={this.onSubmit}>
            <Input fluid
              type="text"
              name="task"
              action={{icon: 'plus', color:'teal'}}
              value={this.state.task}
              onChange={this.onChange}
              placeholder="Add task"/>
          </Form>
          </div>
          <div className="savedTasksContainer">{this.renderTasks()}</div>
      </div>
    );
  }
}
