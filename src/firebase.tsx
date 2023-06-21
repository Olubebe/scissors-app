// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyHuXCwZY_P3chYznLPwzMpNnt_NGJ9LI",
  authDomain: "chatters-app-b1544.firebaseapp.com",
  projectId: "chatters-app-b1544",
  storageBucket: "chatters-app-b1544.appspot.com",
  messagingSenderId: "225896967577",
  appId: "1:225896967577:web:7ef07437becce77098f708",
  measurementId: "G-N65Y6L29BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);  

export {db, auth, app};
