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
      return action.id
    default:
      return state;
  }
}

const defaultData = [
  {
    id: 1,
    name: 'Sit-ups',
    date: Date.now(),
    amount: 10,
  },
  {
    id: 2,
    name: 'Push-ups',
    date: Date.now(),
    amount: 20,
  }
];


const exercises = (state = defaultData, action) => {
  switch(action.type) {
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
