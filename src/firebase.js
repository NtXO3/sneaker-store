// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAzNJGUacWrkX6psGMcTECky83YsXJ8Gw",
  authDomain: "sneaker-store-c6c54.firebaseapp.com",
  projectId: "sneaker-store-c6c54",
  storageBucket: "sneaker-store-c6c54.appspot.com",
  messagingSenderId: "477553422562",
  appId: "1:477553422562:web:2b571633ea09f8c9da2ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)