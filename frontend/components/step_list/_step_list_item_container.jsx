import { connect } from 'react-redux';
import StepListItem from './_step_list_item';
import { updateStep, deleteStep } from '../../actions/step_actions';

const mapDispatchToProps = dispatch => ({
  updateStep: step => dispatch(updateStep(step)),
  deleteStep: step => dispatch(deleteStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
