import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Reducer
import user from './modules/user';

const middlewares: any[] = [thunk];
const rootReducer = combineReducers({
  user
});

function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );

  return { store };
}

export default configureStore;
