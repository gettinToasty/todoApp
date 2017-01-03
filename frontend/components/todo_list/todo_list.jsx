import React from 'react';
import TodoListItem from './_todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <h1>Todo:</h1>
        <ul>
          {this.props.todos.map((todo) => {
            return <TodoListItem todo={todo}
                                 key={todo.id}
                                 removeTodo={this.props.removeTodo}
                                 receiveTodo={this.props.receiveTodo}/>;
          })}
        </ul>
        <TodoForm
          createTodo={this.props.createTodo}
          errors={this.props.errors}
          clearErrors={this.props.clearErrors} />
      </div>
    );
  }
}

export default TodoList;
