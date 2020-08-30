import React from 'react'
import * as actions from "../../actions/evenCounterActions"

const EvenCounter = (props) => {
    const {store}=props
    const incrEvenCounter = () => {
      store.dispatch(actions.incrEvenCounter())
    };
    const decrEvenCounter = () => {
      store.dispatch(actions.decrEvenCounter())
    };
    return (
      <div>
        <h1>Counter::{store.getState().evenCounter}</h1>
        <button onClick={incrEvenCounter}>+</button>
        <button onClick={decrEvenCounter}>-</button>
      </div>
    );
}

export default EvenCounter
