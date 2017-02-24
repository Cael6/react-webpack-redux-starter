import AutobindComponent from 'autobind-component';
import * as React from 'react';
import { Set } from 'immutable';
import { selectCurrentRoles } from 'login-page/selectors';
import { connect } from 'react-redux';
/**
  This is known as a "Higher Order Component".

  They add functionality to other components, but cannot be rendered themselves.
**/
export default (roles = []) => (WrappedComponent) => {
  const wrappedDisplayName = WrappedComponent.displayName || WrappedComponent.name;

  if(!roles || roles.length === 0) {
    console.warn(`Defined an authorized component without roles. No access will be allowed in ${wrappedDisplayName}`);
  }

  class AuthWrapped extends AutobindComponent {

    static redirectTo = '/login';

    componentWillMount() {
      const isAuthorized = this.isAuthorized();

      if(!isAuthorized) {
        return this.onAuthFailedRedirect();
      }

      return;
    }

    onAuthFailedRedirect() {
      const { redirectTo, displayName, name } = this.constructor;
      const { router } = this.props;

      if(!router) {
        console.warn(`Attempted to redirect to ${ redirectTo } from ${displayName || name} but no router was found`);
        return;
      }

      return router.push(redirectTo);
    }

    isAuthorized() {
      const { currentRoles } = this.props;

      if(currentRoles === undefined) {
        console.warn(`No currentRoles prop defined in ${wrappedDisplayName}. Please define currentRoles as a prop to enable authorization.`);
        return false;
      }

      const finalRequiredRoles = Set.isSet(roles) ? roles : Set(roles);
      const finalCurrentRoles = Set.isSet(currentRoles) ? currentRoles : Set(currentRoles);

      return finalRequiredRoles.intersect(finalCurrentRoles).size > 0;
    }

    render() {
      return (<WrappedComponent { ...this.props } />)
    }
  }

  // connecting this component so that children don't have to worry about providing
  // this piece of state.
  return connect(state => ({ currentRoles: selectCurrentRoles(state) }))(AuthWrapped);
};
