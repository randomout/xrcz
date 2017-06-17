import React from 'react';
import { connect } from 'react-redux';
import { select } from './actions';

import Exercise from './Exercise';

import './ExerciseList.css';

const ExerciseList = ({ exercises, onSelect, onAdd, selected, editing }) => {
  const list = exercises.map(
    exercise => {
      const isSelected = exercise.id === selected;
      const isEditing = exercise.id === editing;
      
      return (
        <Exercise key={exercise.id}
                  { ...exercise }
                  selected={isSelected}
                  editing={isEditing}
                  onSelect={() => onSelect(exercise)}
        />
      );
    }
  )

  return (
    <div className="exercise-list">
      <ul>
        {list}
      </ul>

      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
    selected: state.selected,
    editing: state.editing,
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
