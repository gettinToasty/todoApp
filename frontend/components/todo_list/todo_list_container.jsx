import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import {
  fetchTodos,
  createTodo,
  updateTodo
} from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  updateTodo: todo => dispatch(updateTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
