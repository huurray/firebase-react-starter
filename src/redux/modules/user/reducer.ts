import { Action } from '../../types';
import { User } from '.';

interface State {
  isSignedIn: boolean;
  data: User;
}

const initialState = {
  isSignedIn: false,
  data: {
    displayName: '',
    email: '',
    photoURL: ''
  }
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'USER_GET':
      return (state = {
        ...state,
        isSignedIn: true,
        data: { ...state.data, ...action.payload }
      });
    case 'USER_LOGOUT':
      return (state = { ...state, ...initialState });
    default:
      return state;
  }
}

export default reducer;
