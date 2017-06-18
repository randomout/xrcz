import React from 'react';

import './Exercise.css';

const Exercise = ({id, name, date, amount, selected, editing, onSelect, onEdit}) => {
  let styleClasses = 'exercise';

  if(selected) {
    styleClasses += ' selected';
  }

  return (
    <div className={styleClasses} onClick={onSelect}>
      <form >
        <div className="exercise-header">
          <div className="exercise-name">
            {editing ? <input ref={node => {name = node}} defaultValue={name} /> : name}
          </div>
          <div className="exercise-edit">
            {selected && !editing ? <button onClick={onEdit}>Edit</button> : ''}
            {editing ? <button >Done</button> : ''}
          </div>
        </div>

        <div className="exercise-details">
          details here...
        </div>
      </form>
    </div>
  );
};

export default Exercise;
