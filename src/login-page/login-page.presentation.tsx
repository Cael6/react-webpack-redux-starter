import * as React from 'react';
import { PropTypes, Validator } from 'react'
import { fromJS } from 'immutable';
import FacebookLogin from 'react-facebook-login';
import AutobindComponent from 'autobind-component';
import { InjectedRouter } from 'react-router';

// @TODO: There is a timing issue with FacebookLogin that
// throws setState() after unmount warning; but it doesn't effect
// the application in any real way. Should be fixed at some
// point.

interface ILoginPageProps {
  appId: string,
  loginSuccess: Function,
  loginFailed: Function,
  router: InjectedRouter
}

class LoginPage extends AutobindComponent<ILoginPageProps, any> {
  static propTypes: React.ValidationMap<ILoginPageProps>;
  onLoginDone(res) {
    const { loginSuccess, loginFailed, router } = this.props;

    if(res.accessToken) {
      loginSuccess(fromJS({ roles: ['user'], id: res.userID }))

      return router.push('/counter');
    }

    return loginFailed(res);
  }

  render() {
    const { appId } = this.props;

    return (
      <div>
        <FacebookLogin
          appId={ appId }
          autoLoad={ true }
          callback={ this.onLoginDone }
        />
      </div>
    )
  }
}

LoginPage.propTypes = {
  appId: PropTypes.string.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginFailed: PropTypes.func.isRequired
};

export default LoginPage;
