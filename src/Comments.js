import React, {Component} from 'react';
import {Button, Form, Header, Comment} from 'semantic-ui-react'

export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: "",
      commentList: []
    }
  }

  componentDidMount = () => {
    this.renderComments()
  }

  onChange = (event) => {
    this.setState({comment: event.target.value})
  }


  onSubmit = (event) => {
    let comments = JSON.parse(localStorage.getItem('commentList'))
    if (comments == null) {comments = []}
    comments.slice();
    let commentObject = {
      comment: this.state.comment,
      datePosted: new Date().toString()
    }
    var time = commentObject.datePosted;
    // commentObject.datePosted = time.getMonth() + 1 + "/" + time.getDate() + "/20"
    comments.push(commentObject)
    localStorage.setItem('commentList', JSON.stringify(comments))
    this.setState({
      comment: "",
      commentList: comments
    })
    event.preventDefault();
    event.target.reset();
  }

  renderComments = () => {
    let comments = JSON.parse(localStorage.getItem('commentList'))
    if (comments != null) {
      return (
        <div>
        {comments.map(comment => {
          return (
            <div>
            <Comment.Group>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Anonymous</Comment.Author>
                <Comment.Metadata>
                  <div>on  {comment.datePosted}</div>
                </Comment.Metadata>
                <Comment.Text>{comment.comment}</Comment.Text>
              </Comment.Content>
            </Comment>
            </Comment.Group>
            </div>
          )
        })}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="feedContainer">
        <Header as='h3' dividing>Comments</Header>
        <div className="comments">{this.renderComments()}</div>
        <Form onSubmit={this.onSubmit}>
          <Form.TextArea onChange={this.onChange}/>
          <Button content='Add Comment' labelPosition='left' icon='edit' compact color='teal'/>
        </Form>
      </div>
    )
  }
}
