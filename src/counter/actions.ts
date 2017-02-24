import { createAction } from 'redux-actions';
import { RND_API_URL } from 'APP_CONFIG';

export const COUNT_CHANGED = 'COUNT_CHANGED';
export const countChanged = createAction(COUNT_CHANGED);

/*
  This is an example of an "async" action. It uses the "redux-thunk" middleware
  which sees that you've returned a function from an action (a no-op in standard
  redux).

  At this point, redux-thunk cancels the current action and instead calls the function,
  passing in the "dispatch" function for redux. At this point, you can make your web
  callouts, calling any other actions.
*/
export const countChangedSlow = (amnt) => {
  return (dispatch) => {
    return fetch(RND_API_URL)
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }

        return res.text();
      })
      .then(val => {
        const result = amnt + parseInt(val);

        return dispatch(countChanged(result));
      })
  }
}
