import React from 'react';

import './Exercise.css';

const Exercise = ({id, name, date, amount, selected, onClick}) => {
  let styleClasses = 'exercise';
  
  if(selected && selected === id) {
    styleClasses += ' selected';
  }
  
  return (
    <div className={styleClasses} onClick={onClick}>
      <div className="exercise-header">
        {name}
      </div>
      <div className="exercise-details">
        details here...
      </div>
    </div>
  );
};

export default Exercise;
