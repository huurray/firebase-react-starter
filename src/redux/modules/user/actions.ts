// types
import { Action } from '../../types';

export const getUserAction = (data): Action => ({
  type: 'USER_GET',
  payload: data
});
export const logOutUserAction = () => ({
  type: 'USER_LOGOUT'
});

///////////////////////////////////////////////////////
export function getUser(user) {
  return async dispatch => {
    try {
      dispatch(getUserAction(user));
    } catch (err) {
      console.log(err);
    }
  };
}

export function logOutUser() {
  return async dispatch => {
    try {
      dispatch(logOutUserAction());
    } catch (err) {
      console.log(err);
    }
  };
}
