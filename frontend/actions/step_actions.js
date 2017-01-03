import * as APIUtil from '../util/api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveSteps = steps => ({
    type: RECEIVE_STEPS,
    steps
  });

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});

export const fetchSteps = (todoId) => dispatch => {
  return APIUtil.requestSteps(todoId).then(res => dispatch(receiveSteps(res)));
};

export const createStep = (step) => dispatch => {
  return APIUtil.addStep(step).then(
    res => dispatch(receiveStep(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateStep = (step) => dispatch => {
  return APIUtil.updateStep(step).then(
    res => dispatch(receiveStep(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteStep = (step) => dispatch => {
  return APIUtil.deleteStep(step).then(
    res => dispatch(removeStep(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
