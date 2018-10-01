import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/modules/user';

import Container from './Container';

const mapDispatchToProps = (dispatch: any) => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Container);
