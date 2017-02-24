import Login from './login-page.container';
import { Store } from 'redux';

export default (store: Store<{}>) => ({
  path: 'login',
  component: Login
});