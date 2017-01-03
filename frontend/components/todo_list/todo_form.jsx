import React from 'react';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", done: false, tag_names: [], curTagName: ""};
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.updateTag = this.updateTag.bind(this);
    this.updateTags = this.updateTags.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  updateTag(e) {
    this.setState({ curTagName: e.target.value });
  }

  updateTags(e) {
    e.preventDefault();
    this.setState(
      { tag_names: [...this.state.tag_names, this.state.curTagName]},
      this.resetTag
    );
  }

  resetTag() {
    this.setState({ curTagName: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state)
      .then(this.resetForm)
      .then(this.props.clearErrors);
  }

  resetForm() {
    this.setState({ title: "", body: "", tag_names: [] });
  }

  render() {
    return (
      <div>
        <h2>Add Todo:</h2>
        {this.props.errors.map((error, i) => {
          return <p key={i}>{error}</p>;
        })}
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

          <ul>
            {this.state.tag_names.map((tagName, i) => {
              return <li key={i}>{tagName}</li>;
            })}
          </ul>
          <br />
          <input
            type='text'
            value={this.state.curTagName}
            onChange={this.updateTag}></input>
          <button type='button' onClick={this.updateTags}>Add Tag</button>

          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
