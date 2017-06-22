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

const defaultData = [
];


const exercises = (state = defaultData, action) => {
  switch(action.type) {
    case 'RECEIVE_EXERCISES':
      return action.exercises;
    case 'UPDATE_EXERCISE':
      const clone = state.map((item) => {
        if( item.id === action.exercise.id)
          return action.exercise;

        return {...item};
      })

      return clone;
    case 'ADD_EXERCISE':
      return [
        ...state,
        {
          id: state.length + 1,
          name: 'new',
          date: Date.now(),
          amount: 0,
        },
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
