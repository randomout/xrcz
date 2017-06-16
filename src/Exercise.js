import React from 'react';

import './Exercise.css';

const Exercise = ({id, name, date, amount, onClick}) => (
  <div className="exercise" onClick={onClick}>
    <div className="exercise-name">
      {name}
    </div>
    <div className="exercise-amount">
      {amount}
    </div>
  </div>
);

export default Exercise;
