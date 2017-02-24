import reducer from './reducer';
import { countChanged } from './actions';
import { expect } from 'chai';
import { fromJS } from 'immutable';

describe('Counter Reducer', () => {
  describe('COUNT_CHANGED', () => {
    it('should set the current value to the value provided', () => {
      const initialState = fromJS({ value: 5 });
      const action = countChanged(999);
      const result = reducer(initialState, action);
      expect(result.get('value')).to.equal(999);
    });
  })
});