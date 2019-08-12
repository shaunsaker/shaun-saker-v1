import { combineReducers } from 'redux';

import appState from './appState';
import projects from './projects';
import skills from './skills';
import user from './user';

const reducers = combineReducers({
  appState,
  projects,
  skills,
  user,
});

export default reducers;
