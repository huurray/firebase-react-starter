import * as React from 'react';
import * as firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

interface Props {
  userActions: any;
  history: any;
}

export default class extends React.PureComponent<Props> {
  render() {
    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: data => {
          this.props.userActions.getUser({
            displayName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL
          });
          this.props.history.replace('/');
        }
      }
    };
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}
