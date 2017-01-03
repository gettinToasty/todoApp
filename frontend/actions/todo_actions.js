import * as APIUtil from '../util/api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => {
  return APIUtil.requestTodos().then(res => dispatch(receiveTodos(res)));
};

export const createTodo = (todo) => dispatch => {
  return APIUtil.addTodo(todo).then(
    res => dispatch(receiveTodo(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateTodo = (todo) => dispatch => {
  return APIUtil.updateTodo(todo).then(
    res => dispatch(receiveTodo(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteTodo = (todo) => dispatch => {
  return APIUtil.deleteTodo(todo).then(
    res => dispatch(removeTodo(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
