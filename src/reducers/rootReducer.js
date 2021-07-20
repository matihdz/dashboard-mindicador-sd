import { combineReducers } from 'redux';
import { apiReducer } from './apiReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  api: apiReducer,
  ui: uiReducer
})