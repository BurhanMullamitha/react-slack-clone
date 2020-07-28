import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDLGSlF6gQJo40gRuy9AIQkf6q4Qotk7g0",
    authDomain: "slack-clone-using-react.firebaseapp.com",
    databaseURL: "https://slack-clone-using-react.firebaseio.com",
    projectId: "slack-clone-using-react",
    storageBucket: "slack-clone-using-react.appspot.com",
    messagingSenderId: "218278276283",
    appId: "1:218278276283:web:f6f7cc65fd274e5ecc0d9e",
    measurementId: "G-8X2C0TEVJ6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;