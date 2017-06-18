import React from 'react';
import { connect } from 'react-redux';
import { select, selection, edit, updateExercise } from './actions';

import Exercise from './Exercise';

import './ExerciseList.css';

const ExerciseList = ({ exercises, onSelect, onEdit, onUpdate, selected, editing, update }) => {
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
                  onEdit={(e) => {
                      e.preventDefault();
                      onEdit(exercise);
                  }}
                  onUpdate={onUpdate}
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
      dispatch(selection(exercise.id))
    },
    onEdit: exercise => {
      dispatch(edit(exercise.id))
    },
    onUpdate: exercise => {
      dispatch(updateExercise(exercise));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
