import { connect } from 'react-redux';
import authorized from 'authorized';
import { translate } from 'react-i18next';
import { compose } from 'redux';

const id = e => e;

interface IHOC {
  i18n: string[],
  redux: any,
  auth: string[]
}

export default({ i18n, redux, auth }: IHOC) => WrappedComponent => {
  const _translate = i18n ? translate(i18n) : id;
  const _connect = redux ? connect(redux.mapState, redux.mapDispatch) : id;
  const _authorized = auth ? authorized(auth) : id;

  const finalHoc = compose(_connect, _translate, _authorized);

  return finalHoc(WrappedComponent);
};
