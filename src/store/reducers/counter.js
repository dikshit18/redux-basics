import * as ACTIONS from "../actions/actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case ACTIONS.INCREMENT:
      updatedState = {
        ...state,
        counter: state.counter + 1
      };
      break;
    case ACTIONS.DECREMENT:
      updatedState = {
        ...state,
        counter: state.counter - 1
      };
      break;
    case ACTIONS.ADD:
      updatedState = {
        ...state,
        counter: state.counter + action.value
      };
      break;
    case ACTIONS.SUBTRACT:
      updatedState = {
        ...state,
        counter: state.counter - action.value
      };
      break;
    default:
      return state;
  }
  return updatedState;
};

export default reducer;
