import React from 'react';
import TodoListItem from './_todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search:"", todos: this.props.todos};
    this.updateSearch = this.updateSearch.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ todos: nextProps.todos });
  }

  updateSearch(e) {
    this.setState(
      {search: e.target.value},
      this.filterTodos
    );
  }

  filterTodos() {
    let newTodos = [];
    this.props.todos.forEach(todo => {
      if (todo.tags.some(tag => {
        return tag.name.includes(this.state.search);
      })) { newTodos.push(todo); }
    });
    if (this.state.search === "") {
      newTodos = this.props.todos;
    }
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div>
        <h1>Todo:</h1>
        <label>Search by Tag:
          <input onChange={this.updateSearch} value={this.state.search}></input>
        </label>
        <ul>
          {this.state.todos.map((todo) => {
            return <TodoListItem todo={todo}
                                 key={todo.id}
                                 updateTodo={this.props.updateTodo}/>;
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
