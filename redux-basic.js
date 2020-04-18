const redux = require("redux");

const intialState = {
  counter: 0
};

const rootReducer = (state = intialState, action) => {
  if (action === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter++
    };
  }
};

const store = redux.createStore(rootReducer);

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });

console.log(store.getState());
