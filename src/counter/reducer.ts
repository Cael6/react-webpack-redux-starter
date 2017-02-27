import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { COUNT_CHANGED } from './actions';
import { CounterState } from './state';

const defaultState: CounterState = Map({
  value: 0
}) as CounterState;

export const REDUCER_NAME = 'counter';

export default handleActions({
  [COUNT_CHANGED]: (state:CounterState, action) => state.set('value', action.payload)
}, defaultState);
