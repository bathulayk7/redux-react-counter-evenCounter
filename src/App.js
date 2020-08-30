import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import EvenCounter from './components/evenCounter/EvenCounter';

function App(props) {
  return (
    <div className="App">
      <Counter store={props.store}></Counter>
      <hr/>
      <EvenCounter store={props.store}></EvenCounter>
    </div>
  );
}

export default App;
