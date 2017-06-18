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

export const updateExercise = (exercise) => (dispatch, getState) => {
  dispatch(update(exercise));
  dispatch(edit(exercise.id))
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
