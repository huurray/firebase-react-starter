import { User } from './modules/user';

export type Action =
  | { type: 'USER_GET', payload: User }
  | { type: 'USER_LOGOUT' }


