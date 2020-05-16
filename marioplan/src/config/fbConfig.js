import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var firebaseConfig = {
  apiKey: "AIzaSyBX_WvrPYpM2-zgtY5tgWvQPs5AG1DUgT4",
  authDomain: "simandhar-7b623.firebaseapp.com",
  databaseURL: "https://simandhar-7b623.firebaseio.com",
  projectId: "simandhar-7b623",
  storageBucket: "simandhar-7b623.appspot.com",
  messagingSenderId: "686820060754",
  appId: "1:686820060754:web:ea7373e3b57226148c798b",
  measurementId: "G-60XYCT4XER"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase 