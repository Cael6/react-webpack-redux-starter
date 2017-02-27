import * as React from 'react';
import { loginSuccess, loginFailed } from './actions';
import { connect } from 'react-redux';
import LoginPage from './login-page.presentation';
import { FB_APP_ID } from 'APP_CONFIG';

const mapDispatch = { loginSuccess, loginFailed };

const mapProps = () => ({
  appId: FB_APP_ID
});

export default connect(mapProps, mapDispatch)(LoginPage);