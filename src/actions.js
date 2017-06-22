import fetch from 'isomorphic-fetch';

// app actions
export const select = id => {
  return {
    type: 'SELECT_EXERCISE',
    id
  };
};

export const selection = (selection) => (dispatch, getState) => {
  const state = getState();

  if(state.editing === null) {
    return dispatch(select(selection));
  }
}

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

export const edit = id => {
  return {
    type: 'EDIT_EXERCISE',
    id
  }
}

export const update = exercise => {
  return {
    type: 'UPDATE_EXERCISE',
    exercise
  }
}

export const add = () => {
  return {
    type: 'ADD_EXERCISE',
  };
};
