import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { ReducersMapObject } from 'redux';
import { REDUCER_NAME as ROUTING_REDUCER_NAME } from '../app-router';
import loginReducer, { REDUCER_NAME as LOGIN_REDUCER_NAME } from '../login-page/reducer';


export default (asyncReducers: ReducersMapObject) => combineReducers({
  [ROUTING_REDUCER_NAME]: routerReducer,
  [LOGIN_REDUCER_NAME]: loginReducer,
  ...asyncReducers
})
