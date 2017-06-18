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

export const edit = id => {
  return {
    type: 'EDIT_EXERCISE',
    id
  }
}

export const add = () => {
  return {
    type: 'ADD_EXERCISE',
  };
};
