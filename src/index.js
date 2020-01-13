import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';  

//import { reduxFirestore, getFirestore } from 'redux-firestore';
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
//import firebaseConfig from './config/firebaseConfig'

import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const fbConfig = {
    apiKey: "AIzaSyBstaYLJHJL11SjnDlX3kdrGDPRU7-lBSU",
    authDomain: "toladnie-86b03.firebaseapp.com",
    databaseURL: "https://toladnie-86b03.firebaseio.com",
    projectId: "toladnie-86b03",
    storageBucket: "toladnie-86b03.appspot.com",
    messagingSenderId: "880801740650",
    appId: "1:880801740650:web:99f835b8a87bd60a409713",
    measurementId: "G-7F9NCQNM71"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.firestore();

  const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }


/* 
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig)
    )
  );
*/


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root'));
