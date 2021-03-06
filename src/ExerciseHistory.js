import React from 'react';

import { connect } from 'react-redux';

import { select, add } from './actions';

import Exercise from './Exercise';

import './ExerciseHistory.css';

const ExerciseHistory = ({ exercises, onSelect, onAdd }) => (
  <div className="exercise-history">
  <ul>
    {exercises.map(exercise => (<Exercise key={exercise.id} { ...exercise } onClick={() => onSelect(exercise)} /> ))}
  </ul>
  <button onClick={onAdd} >Add</button>
  
  </div>
);

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: exercise => {
      dispatch(select(exercise))
    },
    onAdd: ()  => {
      dispatch(add())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseHistory);
