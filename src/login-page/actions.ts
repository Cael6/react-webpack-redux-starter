import { createActions } from 'redux-actions';

/*
  We're using redux-actions to simplify and remove boilerplate from action creation.
  createActions (and createAction) take a string and produce a function like:

  (data) => {
    return (
      type: 'TYPE_DEFINED',
      payload: data,
      meta: {}
    );
  }

  Where TYPE_DEFINED is the String passed to createAction(s)

  If you need to perform an async action in a action, check out counter/actions.
*/

type LoginStatusEnums = "LOGIN_SUCCESS" | "LOGIN_FAILED";
export const LoginStatus = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS" as LoginStatusEnums,
    LOGIN_FAILED: "LOGIN_FAILED" as LoginStatusEnums
};

export const { loginSuccess, loginFailed } = createActions(LoginStatus.LOGIN_SUCCESS, LoginStatus.LOGIN_FAILED);
