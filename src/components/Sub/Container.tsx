import * as React from 'react';
import Presenter from './Presenter';

export default class extends React.Component {
  render() {
    return (
      <Presenter
        {...this.state}
        {...this.props}
      />
    );
  }
}
