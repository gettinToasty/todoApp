import React from 'react';
import {uniqueID} from '../../util/api_util';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", done: false};
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = uniqueID();
    const p = new Promise((resolve) => {
      this.props.receiveTodo(merge({id: id}, this.state));
      resolve();
    });
    p.then(this.resetForm);
  }

  resetForm() {
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <div>
        <h2>Add Todo:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text"
              onChange={this.updateTitle}
              value={this.state.title} />
          </label><br />

          <label>
            Body:
            <textarea onChange={this.updateBody} value={this.state.body}>
            </textarea>
          </label><br />


          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
