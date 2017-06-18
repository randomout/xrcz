import React from 'react';

import './Exercise.css';

const Exercise = ({id, name, date, amount, selected, editing, onSelect, onEdit, onUpdate}) => {
  let styleClasses = 'exercise';

  if(selected) {
    styleClasses += ' selected';
  }

  return (
    <div className={styleClasses} onClick={onSelect}>
      <form onSubmit={(e) => {
          e.preventDefault();
          
          const data = {
            id: id,
            name: name.value,
            date: date,
            amount: amount
          }
          
          onUpdate(data);
      }}>
        <div className="exercise-header">
          <div className="exercise-name">
            {editing ? <input ref={node => {name = node}} defaultValue={name} /> : name}
          </div>
          <div className="exercise-edit">
            {selected && !editing ? <button onClick={onEdit}>Edit</button> : ''}
            {editing ? <button type="submit" >Done</button> : ''}
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
