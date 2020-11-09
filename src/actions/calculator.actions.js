import {
  EVAL,
  SAVE_INPUT,
  SAVE_OPERATION,
  CLEAR_STATE,
} from "../action-types/calculator.actionTypes";
export const saveInput = (input) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_INPUT,
      payload: input,
    });
  };
};
export const saveOperation = (input) => {
  return (dispatch) => {
    if (input) {
      dispatch({
        type: EVAL,
      });
    }
    dispatch({
      type: SAVE_OPERATION,
      payload: input,
    });
  };
};
export const doOperation = (input) => {
  return (dispatch) => {
    dispatch({
      type: EVAL,
    });
  };
};
export const clearState = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_STATE,
    });
  };
};
