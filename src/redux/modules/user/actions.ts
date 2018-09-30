// types
import { Action } from '../../types';

export const getUserAction = (data): Action => ({
  type: 'USER_INIT',
  payload: data
});

export function getUser(user) {
  return async dispatch => {
    try {
      dispatch(getUserAction(user));
    } catch (err) {
      console.log(err);
    }
  };
}
