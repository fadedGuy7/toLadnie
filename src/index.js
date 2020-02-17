import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';  

import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase,  isLoaded} from 'react-redux-firebase'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import LogRocket from 'logrocket';
LogRocket.init('ho6nb2/toladnie');


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
        reduxFirestore(firebase),
));

const rrfConfig = {
  userProfile: 'users',        // 2. exact name of collection
  useFirestoreForProfile: true // 1. connect with firestore for info about user
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className='screen valign-wrapper'>
                                <div className="loading progress valign-wrapper">
                                  <div className="indeterminate"></div>
                                </div>
                              </div>;
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root'));
