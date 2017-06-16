import React, { Component } from 'react';

const Exercise = ({id, name, date, amount}) => (
  <div className="exercise">
    <div className="exercise-name">
      {name}
    </div>
    <div className="exercise-amount">
      {amount}
    </div>
  </div>
);

export default Exercise;
