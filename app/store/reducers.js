// @flow
/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

import appReducer from './ducks/App';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

const reducers = {
  settings: appReducer,
};

export type Reducers = typeof reducers;

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer() {
  return combineReducers(reducers);
}
