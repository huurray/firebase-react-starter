import reducer from './reducer';
export * from './actions';

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
}

export default reducer;