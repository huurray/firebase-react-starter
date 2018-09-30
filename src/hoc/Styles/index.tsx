import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themes';


export default (Component: React.ComponentClass<any>): any => {
  return class extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Component {...this.props} />
        </ThemeProvider>
      );
    }
  };
};

