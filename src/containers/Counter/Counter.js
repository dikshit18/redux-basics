import React, { Component } from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddition} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtraction} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store result
        </button>
        <ul>
          {console.log("thid", this.props.storedResults)}
          {this.props.storedResults.map(item => {
            return (
              <li
                key={item.id}
                onClick={() => this.props.onDeleteResult(item.id)}
              >
                {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: ACTIONS.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: ACTIONS.DECREMENT }),
    onAddition: () => dispatch({ type: ACTIONS.ADD, value: 5 }),
    onSubtraction: () => dispatch({ type: ACTIONS.SUBTRACT, value: 5 }),
    onStoreResult: counter => dispatch({ type: ACTIONS.STORE_RESULT, counter }),
    onDeleteResult: elemId => dispatch({ type: ACTIONS.DELETE_RESULT, elemId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
