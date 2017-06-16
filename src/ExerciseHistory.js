import React from 'react';

import { connect } from 'react-redux';

import { select } from './actions';

import Exercise from './Exercise';

import './ExerciseHistory.css';

const ExerciseHistory = ({ exercises, onSelect }) => (
  <div className="exercise-history">
    <ul>
      {exercises.map(exercise => (
        <Exercise key={exercise.id} { ...exercise } onClick={() => onSelect(exercise)} />
      ))}
    </ul>

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseHistory);
