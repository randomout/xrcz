import React, { Component } from 'react';

import { connect } from 'react-redux';

import Exercise from './Exercise';

const ExerciseHistory = ({ exercises }) => (
  <div className="exercise-history">
    <ul>
      {exercises.map(exercise => (
        <Exercise key={exercise.id} { ...exercise } />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
  }
}

export default connect(mapStateToProps)(ExerciseHistory);
