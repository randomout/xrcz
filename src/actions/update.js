import fetch from 'isomorphic-fetch';

import { edit } from './index';

export const updatingExercise = () => {
  return {
    type: 'UPDATING_EXERCISE'
  }
}

export const updatedExercise = (exercise) => {
  return {
    type: 'UPDATED_EXERCISE',
    exercise
  }
}

export const updateExercise = (exercise) => (dispatch, getState) => {
  dispatch(updatingExercise());

  return fetch(`/exercise/${exercise.id}`,
               { method: 'POST',
                 headers: {
                   'Accept': 'application/json, text/plain, */*',
                   'Content-Type': 'application/json'
                 }, 
                 body: JSON.stringify(exercise)
               })
    .then(response => response.json(), error => console.log('error!', error))
    .then(exercise => {
      dispatch(updatedExercise(exercise));
      dispatch(edit(exercise.id));
    } )
}

