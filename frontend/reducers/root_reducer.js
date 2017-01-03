import { combineReducers } from 'redux';
import todoReducer from './todos_reducer';
import stepsReducer from './steps_reducer';
import errorReducer from './error_reducer';


const rootReducer = combineReducers({
  todos: todoReducer,
  steps: stepsReducer,
  errors: errorReducer
});

export default rootReducer;
