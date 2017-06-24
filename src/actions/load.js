import fetch from 'isomorphic-fetch';

export const requestExercises = () => {
  return {
    type: 'REQUEST_EXERCISES'
  }
}

export const receiveExercises = (exercises) => {
  return {
    type: 'RECEIVE_EXERCISES',
    exercises
  }
}

export const fetchExercises = () => (dispatch) => {
  dispatch(requestExercises());

  return fetch('/exercises')
    .then(response => response.json(), error => console.log('error!', error))
    .then(data => dispatch(receiveExercises(data)))
}
