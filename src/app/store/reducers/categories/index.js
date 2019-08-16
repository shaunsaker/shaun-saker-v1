import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

export default function categoriesReducer(state = initialState, action = {}) {
  let newState;
  const { payload } = cloneObject(action);

  switch (action.type) {
    case 'SET_CATEGORIES':
      newState = cloneObject(state);
      newState = payload.data;

      return newState;

    default:
      return state;
  }
}
