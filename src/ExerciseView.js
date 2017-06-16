import React from 'react';
import { connect } from 'react-redux';

import './ExerciseView.css';

const ExerciseView = ({selected}) => (
  <div className="exercise-view">
    <div className="exercise-header">
      <div className="exercise-name">
        {selected !== null ? selected.name : ''}
      </div>
      <div className="exercise-date">
        {selected !== null ? selected.date : ''}
      </div>
    </div>
    <div className="exercise-amount">
      {selected != null ? selected.amount : ''} reps
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    selected: state.selected
  };
};

export default connect(mapStateToProps)(ExerciseView);
