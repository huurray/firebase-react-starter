import * as React from 'react';
import Presenter from './Presenter';

interface Props {
  history: any;
  user: any;
  userActions: any;
  isSignedIn: boolean;
}

export default class extends React.Component<Props> {
  render() {
    
    return (
      <Presenter
        {...this.state}
        {...this.props}
      />
    );
  }
}
