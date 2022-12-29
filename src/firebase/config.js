import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDExJWjPmGuMEV09linU-bpCbIuGaIYx6o",
  authDomain: "rn-p-6a9bd.firebaseapp.com",
  projectId: "rn-p-6a9bd",
  storageBucket: "rn-p-6a9bd.appspot.com",
  messagingSenderId: "148572802526",
  appId: "1:148572802526:web:510adede381e5968f3a14f",
  measurementId: "G-HF8W39J1L8",
};

// Initialize Firebase
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
