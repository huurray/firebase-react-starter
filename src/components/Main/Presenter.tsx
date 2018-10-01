import * as React from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  color: ${props => props.theme.colors.PRIMARY};
`;

interface Props {
  history: any;
  user: any;
  userActions: any;
  isSignedIn: boolean;
}

export default class extends React.PureComponent<Props> {
  render() {
    console.log(this.props.isSignedIn);
    console.log(this.props.user);

    const { history } = this.props;
    return (
      <Container>
        메인페이지입니다.
        {this.props.isSignedIn ? (
          <button
            onClick={() => {
              firebase.auth().signOut();
              this.props.userActions.logOutUser();
            }}
          >
            로그아웃
          </button>
        ) : (
          <button onClick={() => history.push('/signin')}>로그인</button>
        )}
        <button onClick={() => history.push('/sub')}>서브페이지로</button>
      </Container>
    );
  }
}
