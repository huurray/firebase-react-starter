import * as React from 'react';
import * as firebase from 'firebase';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../redux/modules/user';

interface Props {
  userActions: any;
}

function withAuth(Component: React.ComponentClass<any>) {
  class ComponentWithHOC extends React.Component<Props> {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.userActions.getUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          });

          //이후 서버에서 GET하는 추가적인 유저 정보 입력 to redux store
        }
      });
    }

    render() {
      return (
        <React.Fragment>
          <Component {...this.props} />
        </React.Fragment>
      );
    }
  }

  const mapDispatchToProps = (dispatch: any) => ({
    userActions: bindActionCreators(userActions, dispatch)
  });

  return connect(
    null,
    mapDispatchToProps
  )(ComponentWithHOC);
}

export default withAuth;
