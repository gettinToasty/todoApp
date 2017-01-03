import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store.js';
import Root from './components/root';
import {fetchTodos} from './actions/todo_actions';

const store = Store();

window.store = store;
window.fetchTodos = fetchTodos;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
