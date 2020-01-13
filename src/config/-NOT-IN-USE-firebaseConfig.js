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

  export default firebase;


