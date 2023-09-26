// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3MnjKLOQ37DjowXzFwZVrfOfX3LXRxb0",
  authDomain: "oniichan-0.firebaseapp.com",
  projectId: "oniichan-0",
  storageBucket: "oniichan-0.appspot.com",
  messagingSenderId: "329334047039",
  appId: "1:329334047039:web:50a6068dec47e3ae7dd38a",
  measurementId: "G-34E22T9RQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);