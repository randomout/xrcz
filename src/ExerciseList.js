import React from 'react';

import { connect } from 'react-redux';

import { select } from './actions';

import Exercise from './Exercise';

import './ExerciseList.css';

const ExerciseList = ({ exercises, onSelect, onAdd, selected }) => (
  <div className="exercise-list">
  <ul>
    {exercises.map(exercise => (<Exercise key={exercise.id} { ...exercise } selected={selected} onClick={() => onSelect(exercise)} /> ))}
  </ul>

  
  </div>
);

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
    selected: state.selected,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: exercise => {
      dispatch(select(exercise.id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
