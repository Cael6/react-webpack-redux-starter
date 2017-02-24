import * as React from 'react';
import { PropTypes } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n-config';

/*
  This is a simple wrapper around the application which defines elements common
  to the application.
*/

interface IApp {
  children: React.Requireable<any>
}

const App = ({ children }:IApp):React.ReactElement<{}> => {
  return (
    <I18nextProvider i18n={ i18n }>
      <div>
        {
          children
        }
      </div>
    </I18nextProvider>
  );
}

export default App;
