import React from "react";

import * as actions from "../../actions/counterActions";

const Counter = (props) => {
    const {store}=props
  const incrCounter = () => {
    store.dispatch(actions.incrAction())
  };
  const decrCounter = () => {
    store.dispatch(actions.decrAction())
  };
  return (
    <div>
      <h1>Counter::{store.getState().counter}</h1>
      <button onClick={incrCounter}>+</button>
      <button onClick={decrCounter}>-</button>
    </div>
  );
};

export default Counter;
