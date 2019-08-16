import { combineReducers } from 'redux';

import appState from './appState';
import categories from './categories';
import projects from './projects';
import skills from './skills';
import user from './user';

const reducers = combineReducers({
  appState,
  categories,
  projects,
  skills,
  user,
});

export default reducers;
