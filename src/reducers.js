import { combineReducers } from 'redux';

const dummy = {
  id: -1,
  name: '',
  date: Date.now(),
  amount: 0,
}

const selected = (state = dummy, action) => {
  console.log('action: ', action);
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
  switch(action.type) {
    case 'ADD_EXERCISE':
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
  exercises
});
