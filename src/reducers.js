import { combineReducers } from 'redux';


const selected = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_EXERCISE':
      if(state && state === action.id) {
        return null;
      } else {
        return action.id;
      }
    default:
      return state;
  }
};

const editing = (state = null, action) => {
  switch(action.type) {
    case 'EDIT_EXERCISE':
      if(state === action.id)
        return null;
      
      return action.id
    default:
      return state;
  }
}


const exercises = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_EXERCISES':
      return action.exercises;
    case 'UPDATED_EXERCISE':
      const clone = state.map((item) => {
        if( item.id === action.exercise.id)
          return action.exercise;

        return {...item};
      })

      return clone;
    case 'ADDED_EXERCISE':
      return [
        ...state,
        action.exercise,
      ]
      
    default:
      return state;
  }
};

export default combineReducers({
  selected,
  editing, 
  exercises
});
