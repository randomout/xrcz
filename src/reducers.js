import { combineReducers } from 'redux';

const selected = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_EXERCISE':
      return action.exercise;
    default:
      return state;
  }
};

const defaultData = [
  {
    id: 1,
    name: 'foo',
    date: Date.now(),
    amount: 10,
  },
  {
    id: 2,
    name: 'bar',
    date: Date.now(),
    amount: 20,
  }
];


const exercises = (state = defaultData, action) => {
  console.log('action', action);
  
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
  exercises
});
