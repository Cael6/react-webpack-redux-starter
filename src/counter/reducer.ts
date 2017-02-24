import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { COUNT_CHANGED } from './actions';

const defaultState = Map({
  value: 0
});

export const REDUCER_NAME = 'counter';

export default handleActions({
  [COUNT_CHANGED]: (state, action) => state.set('value', action.payload)
}, defaultState);
