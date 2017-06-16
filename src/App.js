import React, { Component } from 'react';

import ExerciseHistory from './ExerciseHistory';
import ExerciseView from './ExerciseView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Exercise Tracker</h2>
        </div>
        <div className="App-view">
          <ExerciseHistory />
          <ExerciseView />
        </div>
      </div>
    );
  }
}

export default App;
