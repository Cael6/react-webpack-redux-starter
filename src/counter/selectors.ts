import { REDUCER_NAME } from './reducer';

export const selectValue = (state) => state.getIn([REDUCER_NAME, 'value']);
