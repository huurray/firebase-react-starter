import { Action } from '../../types';
import { User } from '.';

interface State {
  data: User;
}

const initialState = {
  data: {
    displayName: '',
    email: '',
    photoURL: ''
  }
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'USER_INIT':
      return (state = { data: { ...state.data, ...action.payload } });
    default:
      return state;
  }
}

export default reducer;
