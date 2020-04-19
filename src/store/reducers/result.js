import * as ACTIONS from "../actions/actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case ACTIONS.STORE_RESULT:
      updatedState = {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.counter })
      };
      break;
    case ACTIONS.DELETE_RESULT:
      const newArray = state.results.filter(
        result => result.id !== action.elemId
      );
      updatedState = {
        ...state,
        results: newArray
      };
      break;
    default:
      return state;
  }
  return updatedState;
};

export default reducer;
