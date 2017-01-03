import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.todo.body}

        <ul>
          {this.props.todo.tags.map((tag, i) => {
            return <li key={i}>{tag.name}</li>;
          })}
        </ul>

        <StepListContainer todoId={this.props.todo.id}/>

        <button onClick={this.props.deleteTodo.bind(null, this.props.todo)}>
          Delete Todo
        </ button>
      </div>

    );
  }
}

export default TodoDetailView;
