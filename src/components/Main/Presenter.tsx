import * as React from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const CenterBox = styled.h1`
  ${props => props.theme.mixins.absoluteCenter};
  ${props => props.theme.typo.h1};
  color: ${props => props.theme.colors.PRIMARY};
`;
const Buttons = styled.div`
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
        <CenterBox>메인페이지입니다.</CenterBox>
        <Buttons>
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
        </Buttons>
      </Container>
    );
  }
}
