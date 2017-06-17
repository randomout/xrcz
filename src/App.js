import React, { Component } from 'react';

import { connect } from 'react-redux';

import ExerciseList from './ExerciseList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Exercises</h2>
        </div>
        <div className="App-view">
          <ExerciseList />
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
