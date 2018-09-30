import * as React from 'react';
import * as firebase from 'firebase';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../redux/modules/user';

import AuthScreen from './AuthScreen';

interface Props {
  userActions: any;
  userData: any;
}
interface State {
  isSignedIn: boolean;
}

function withAuth(Component: React.ComponentClass<any>) {
  class ComponentWithHOC extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        isSignedIn: false
      };
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ isSignedIn: !!user });
        }
      });
    }

    render() {
      console.log(this.props.userData);
      return (
        <React.Fragment>
          {this.state.isSignedIn ? (
            <Component {...this.props} />
          ) : (
            <AuthScreen userActions={this.props.userActions} />
          )}
        </React.Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    userData: state.user.data
  });
  const mapDispatchToProps = (dispatch: any) => ({
    userActions: bindActionCreators(userActions, dispatch)
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComponentWithHOC);
}

export default withAuth;
