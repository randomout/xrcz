import React from 'react';

import { connect } from 'react-redux';
import { add } from './actions';

import ExerciseList from './ExerciseList';

import './App.css';

const App = ({ onAdd }) => (
  <div className="app">
    <div className="app-header">
      <h2>Exercises</h2>
    </div>
    <div className="app-controls">
      <button onClick={onAdd} >Add</button>
    </div>
    <div className="app-view">
      <ExerciseList />
    </div>
  </div>
);

var mapStateToProps = state => {
  return {
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: ()  => {
      dispatch(add())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
