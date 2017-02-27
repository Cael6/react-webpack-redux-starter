import Login from './login-page.container';
import { AsyncReducerStore } from 'store';

export default (store: AsyncReducerStore<any>) => ({
  path: 'login',
  component: Login
});