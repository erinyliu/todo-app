import React, {Component} from 'react';
import {Button, Form, Input, Icon, Modal} from 'semantic-ui-react'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
    };
  }

  componentDidMount = () => {
    this.retrieveTasks();
  }

  addTask = (event) => {

    this.setState({
      task: event.target.value
    })

  }

  updateTask = () => {

  }

  removeTask = () => {

  }

  retrieveTasks = () => {

  }

  // renderButton = () => {
  //   return (
  //     <Button basic color='blue' size='large' animated>
  //       <Button.Content visible>
  //         <Icon name='plus'/>
  //       </Button.Content>
  //       <Button.Content hidden>Add Task</Button.Content>
  //     </Button>
  //   )
  // }

  render() {
    return (
      <div className="toDoContainer">
        <div className="taskListContainer">This will be the container for the task list.</div>
        <div className="taskFormContainer">
          <Form className="taskForm">
            <Form.Field>
              <Input type='text' placeholder="Add Task" action>
                <Input/>
                <Button color='teal' type='submit'>
                  <Icon name='plus'/>
                </Button>
              </Input>
            </Form.Field>
          </Form>
        </div>
      </div>
    )
  }
}
