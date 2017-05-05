// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import toggle from './drawer';

const rootReducer = combineReducers({
  counter,
  toggle,
  router,
});

export default rootReducer;
