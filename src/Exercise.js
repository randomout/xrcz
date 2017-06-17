import React from 'react';

import './Exercise.css';

const Exercise = ({id, name, date, amount, selected, editing, onSelect, onEdit}) => {
  let styleClasses = 'exercise';

  if(selected) {
    styleClasses += ' selected';
  }

  return (
    <div className={styleClasses} onClick={onSelect}>
      <div className="exercise-header">
        <div className="exercise-name">
          {name}
        </div>
        <div className="exercise-edit">
          {selected ? <button>Edit</button> : ''}
        </div>
      </div>

      <div className="exercise-details">
        details here...
      </div>
    </div>
  );
};

export default Exercise;
