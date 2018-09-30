import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './redux/configStore';
const { store } = configureStore();

import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyDTPjDDBW55UHnIZCi4sWX-VeilcEfqhxU',
  authDomain: 'fir-react-chat-2c0c8.firebaseapp.com',
  databaseURL: 'https://fir-react-chat-2c0c8.firebaseio.com',
  messagingSenderId: '727279702412',
  projectId: 'fir-react-chat-2c0c8',
  storageBucket: 'fir-react-chat-2c0c8.appspot.com'
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
