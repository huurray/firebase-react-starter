import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themes';
import baseStyles from './base';

export default (Component: React.ComponentClass<any>): any => {
  return class extends React.Component {
    render() {
      baseStyles();
      return (
        <ThemeProvider theme={theme}>
          <Component {...this.props} />
        </ThemeProvider>
      );
    }
  };
};

