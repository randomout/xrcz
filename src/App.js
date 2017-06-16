import React, { Component } from 'react';

import { connect } from 'react-redux';

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
          <div className="App-details">
            {this.props.selected !== null ? <ExerciseView /> : ''}
          </div>
        </div>
      </div>
    );
  }
}

var mapStateToProps = state => {
  return {
    selected: state.selected
  };
};

export default connect(mapStateToProps)(App);
