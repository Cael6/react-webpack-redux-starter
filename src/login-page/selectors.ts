import { REDUCER_NAME } from './reducer';
import { Map, List } from 'immutable';
import { createSelector } from 'reselect';

/*
  Selectors are simple functions that take the state of the application  and the
  props on the component and return some piece of information. While no code in
  the application is currently using it, this is also where you could take your
  normalized code (see https://github.com/paularmstrong/normalizr) and pull out
  the pieces of information you'd need.

  This helps take the logic of massaging data out of components (which should
  only care about showing stuff) and puts it in a shareable area.
*/

export const selectCurrentUser = (state) => state.getIn([REDUCER_NAME, 'user'], Map());

export const selectCurrentRoles = createSelector(
  selectCurrentUser,
  (user) => user.get('roles', List())
)
