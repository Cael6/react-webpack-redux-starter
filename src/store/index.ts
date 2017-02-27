import createRootReducer from '../root-reducer';
import { createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import normalizrMiddleware from 'redux-normalizr-middleware';
import { Map } from 'immutable';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, normalizrMiddleware()];

export interface AsyncReducerStore<S> extends Store<S> {
  asyncReducers: {};
}

export default (defaultState: Map<{}, {}> = Map()): AsyncReducerStore<any> => {
  const store = (createStore(createRootReducer({}), defaultState, composeEnhancers(applyMiddleware(...middlewares))) as AsyncReducerStore<any>);
  store.asyncReducers = {};
  return store;
};

export const injectAsyncReducer = (store, name, reducer) => {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(createRootReducer(store.asyncReducers));
  return store;
};
