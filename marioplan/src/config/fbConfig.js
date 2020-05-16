import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const firebaseConfig = {
  apiKey: "AIzaSyDfQx_W22oeM9tDGpAWnu4pt80I6AQlP5k",
  authDomain: "dummy-project-50d33.firebaseapp.com",
  databaseURL: "https://dummy-project-50d33.firebaseio.com",
  projectId: "dummy-project-50d33",
  storageBucket: "dummy-project-50d33.appspot.com",
  messagingSenderId: "312527655119",
  appId: "1:312527655119:web:47cda8861d25926430a7ba",
  measurementId: "G-V01MLEJ6J3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase 