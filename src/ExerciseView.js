import React from 'react';
import { connect } from 'react-redux';

import './ExerciseView.css';

const ExerciseView = ({selected}) => (
  <div className="exercise-view">
    <div className="exercise-header">
      <div className="exercise-name">
        {selected.name}
      </div>
      <div className="exercise-date">
        {selected.date}
      </div>
    </div>
    <div className="exercise-amount">
      {selected.amount}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    selected: state.selected
  };
};

export default connect(mapStateToProps)(ExerciseView);
