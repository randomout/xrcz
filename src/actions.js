// app actions
export const select = id => {
  return {
    type: 'SELECT_EXERCISE',
    id
  };
};

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
