import * as React from 'react';

import Presenter from './Presenter';

interface Props {
  userActions: any;
  history: any;
}

export default class extends React.Component<Props> {
  render() {
    return <Presenter {...this.state} {...this.props} />;
  }
}
