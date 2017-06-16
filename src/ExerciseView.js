import React, { Component } from 'react';

class ExerciseView extends Component {
  render() {
    return (
      <div className="exercise-view">
        <div className="exercise-date">
          99/99/99
        </div>
        <div className="exercise-name">
          Name goes here...
        </div>
        <div className="exercise-amount">
          99 reps
        </div>
      </div>
    );
  }
}

export default ExerciseView;
