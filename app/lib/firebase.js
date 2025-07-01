// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn3g3bQpC6ntxPfe_GUzsqlnRs8hV3Dm0",
  authDomain: "visitor-counter-e8d44.firebaseapp.com",
  projectId: "visitor-counter-e8d44",
  storageBucket: "visitor-counter-e8d44.firebasestorage.app",
  messagingSenderId: "791364497453",
  appId: "1:791364497453:web:1200b418156c63b2fb08a4",
  measurementId: "G-63B8G615LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore reference
const db = getFirestore(app);

export default db;