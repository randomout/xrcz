export * from './add';
export * from './update';
export * from './load';
export * from './select';

export const edit = id => {
  return {
    type: 'EDIT_EXERCISE',
    id
  }
}




