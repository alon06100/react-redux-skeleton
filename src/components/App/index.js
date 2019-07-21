import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../logo.svg';
import './index.scss';
import { toggleTest } from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const { test } = useSelector(state => state.main);
  console.log(test);

  return (
    <div onClick={() => dispatch(toggleTest(!test))} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
