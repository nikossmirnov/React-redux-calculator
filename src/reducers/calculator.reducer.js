import {
  CLEAR_STATE,
  EVAL,
  SAVE_INPUT,
  SAVE_OPERATION,
} from "../action-types/calculator.actionTypes";
import initialState from "../store/initialState";
export default function (state = initialState.calculator, action) {
  switch (action.type) {
    case SAVE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case SAVE_OPERATION:
      return {
        ...state,
        operator: action.payload,
        prevNum: state.input,
      };
    case EVAL:
      if (state.operator == "plus") {
        return {
          ...state,
          input: parseFloat(state.prevNum) + parseFloat(state.input),
        };
      } else if (state.operator == "subtract") {
        return {
          ...state,
          input: parseFloat(state.prevNum) - parseFloat(state.input),
        };
      } else if (state.operator == "multiply") {
        return {
          ...state,
          input: parseFloat(state.prevNum) * parseFloat(state.input),
        };
      } else if (state.operator == "divide") {
        return {
          ...state,
          input: parseFloat(state.prevNum) / parseFloat(state.input),
        };
      }
      return {
        ...state,
      };
    case CLEAR_STATE:
      return initialState.calculator;
    default:
      return state;
  }
}
