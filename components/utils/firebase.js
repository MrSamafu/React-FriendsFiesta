const firebaseConfig = {
  apiKey: "AIzaSyCK0AbwQF9r24lcQMMdHJ6edsHNKlczdBk",
  authDomain: "friendsfiesta-1953b.firebaseapp.com",
  databaseURL: "https://friendsfiesta-1953b.firebaseio.com",
  projectId: "friendsfiesta-1953b",
  storageBucket: "friendsfiesta-1953b.appspot.com",
  messagingSenderId: "464992281435",
  appId: "1:464992281435:web:b8f9791edf99cd17cc707e",
  measurementId: "G-3K4XWRD6SB"
};

import * as firebase from 'firebase'  // Should not be used elsewhere in the project
import "firebase/firestore";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;