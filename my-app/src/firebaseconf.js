// Import the functions you need from the SDKs you need

import firebase from 'firebase'
// Required for side-effects
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKcSFAWh3dD_-sOxvru9kTmRv0kHqfJN0",
  authDomain: "react-firebasefirst.firebaseapp.com",
  projectId: "react-firebasefirst",
  storageBucket: "react-firebasefirst.appspot.com",
  messagingSenderId: "344422937356",
  appId: "1:344422937356:web:1075c60efcfb8fca15cf29",
  measurementId: "G-PN6H2CKS4Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export {db}