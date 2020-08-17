import * as firebase from "firebase/app";
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
let firebaseConfig = {
    apiKey: "AIzaSyAJhV28Z2cOGBKHocI0dEAhUdI0t_1khXI",
    authDomain: "therapyfynd-challenge.firebaseapp.com",
    databaseURL: "https://therapyfynd-challenge.firebaseio.com",
    projectId: "therapyfynd-challenge",
    storageBucket: "therapyfynd-challenge.appspot.com",
    messagingSenderId: "417953929237",
    appId: "1:417953929237:web:6996e2ffb5243e0d85d61c",
    measurementId: "G-QX4GXFYC64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
