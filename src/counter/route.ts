import { injectAsyncReducer, AsyncReducerStore } from 'store';
import { CounterState } from './state';

/*
  Here we define the counter route. In contrast from the default App route,
  we are defining our route (and reducer) asyncronously. This causes a
  "bundle split" in the application. This tells Webpack to create a seperate
  file and load it if, and only if, this route is accessed. This lets
  our "critical path" (the intial application load) as minimal as possible.

  We also asyncronously load our reducer in order to allow any API specific
  code to be split out as well.
*/
export default (store: AsyncReducerStore<CounterState>) => ({
  path: 'counter',
  getComponent: (nextState, cb: Function): void => require.ensure([], require => {
    const Counter = (require('./counter.container') as any).default;
    const reducer: any = require('./reducer');

    injectAsyncReducer(store, reducer.REDUCER_NAME, reducer.default);
    cb(null, Counter);
  })
});
