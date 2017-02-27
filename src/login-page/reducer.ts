import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { LoginStatus } from './actions';

const defaultState = fromJS({
  user: {
    roles: [], id: null, name: 'Anonymous'
  }
});

export const REDUCER_NAME = 'auth';

/*
  A reducer is a "pure" function that takes in an original state and action,
  and produces a new state (no mutations). Pure means that nothing "random"
  can occur and that nothing that causes side-effects can occur. This means
  you should NOT do the following in a reducer:

  1. Store the current date or time
  2. Make an web callout
  3. Write a file to disk
  4. Interact with any "global" entities

  If you wish to do any of those things, they should occur in an action.
*/
export default handleActions({
  [LoginStatus.LOGIN_SUCCESS]: (state, action) => state.set('user', action.payload)
}, defaultState);
