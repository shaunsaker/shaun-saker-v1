import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

export default function skillsReducer(state = initialState, action = {}) {
  let newState;
  const { payload } = cloneObject(action);

  switch (action.type) {
    case 'SET_SKILLS':
      newState = cloneObject(state);
      newState = payload.data;

      return newState;

    default:
      return state;
  }
}
