import * as React from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  color: ${props => props.theme.colors.PRIMARY};
`;

interface Props {
  history: any;
}

export default class extends React.PureComponent<Props> {
  render() {
    return (
      <Container>
        메인페이지입니다.
        <button onClick={() => firebase.auth().signOut()}>로그아웃</button>
        <button onClick={() => this.props.history.push('/sub')}>
          서브페이지로
        </button>
      </Container>
    );
  }
}
