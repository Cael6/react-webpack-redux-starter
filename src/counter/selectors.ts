import { REDUCER_NAME } from './reducer';
import { CounterState } from 'counter/state';

export const selectValue = (state: CounterState) => state.getIn([REDUCER_NAME, 'value']);
