import authReducer from './authReducer';
import memeReducer from './memeReducer';
import commentReducer from './commentReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    meme: memeReducer,
    comment: commentReducer,
    firestore: firestoreReducer, // (2) sinking data from firebase to 'firestore' !!#
    firebase: firebaseReducer
}); 

export default rootReducer;