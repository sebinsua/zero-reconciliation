import React, { Component } from 'react';
import { Tick } from './Tick';
import { FastText } from './FastText';

import './App.css';

const ITEM_COUNT = 500;

class App extends Component {
  render() {
    return (
      <div className="App">
        {Array(ITEM_COUNT).fill(
          <Tick>
            {value => <FastText value={value || 0} />}
          </Tick>
        )}
      </div>
    );
  }
}

export default App;
