import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';
import { createStep, fetchSteps } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  steps: stepsByTodoId(state, ownProps.todoId)
});

const mapDispatchToProps = dispatch => ({
  createStep: step => dispatch(createStep(step)),
  fetchSteps: todoId => dispatch(fetchSteps(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
