import { User } from './modules/user';

export type Action =
  | { type: 'USER_INIT', payload: User }


