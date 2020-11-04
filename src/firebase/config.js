import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA6E6slCWpubT-62GJH-F21CvyLBfhhAvg",
    authDomain: "pixagram-7ff85.firebaseapp.com",
    databaseURL: "https://pixagram-7ff85.firebaseio.com",
    projectId: "pixagram-7ff85",
    storageBucket: "pixagram-7ff85.appspot.com",
    messagingSenderId: "141442709498",
    appId: "1:141442709498:web:4487ef77f50a35b7981643"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {firebase, projectFirestore, projectStorage, timestamp};