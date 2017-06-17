// app actions
export const select = exercise => {
  return {
    type: 'SELECT_EXERCISE',
    exercise
  };
};

export const add = () => {
  return {
    type: 'ADD_EXERCISE',
  };
};
