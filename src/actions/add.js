import fetch from 'isomorphic-fetch';

import { edit } from './index';

const defaultNew = {
  name: 'New Exercise',
  date: Date.now(),
  amount: 0,
};

export const addingExercise = () => {
  return {
    type: 'ADDING_EXERCISE',
  };
};

export const addedExercise = (exercise) => {
  return {
    type: 'ADDED_EXERCISE',
    exercise
  }
}

export const addExercise = () => (dispatch, getState) => {
  dispatch(addingExercise());

  return fetch(`/exercise`,
               { method: 'PUT',
                 headers: {
                   'Accept': 'application/json, text/plain, */*',
                   'Content-Type': 'application/json'
                 }, 
                 body: JSON.stringify(defaultNew)
               })
    .then(response => response.json(), error => console.log('error!', error))
    .then(exercise => {
      dispatch(addedExercise(exercise));
      dispatch(edit(exercise.id));
    } )

}
