// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "my-portfolio-7e3a4.firebaseapp.com",
  projectId: "my-portfolio-7e3a4",
  storageBucket: "my-portfolio-7e3a4.appspot.com",
  messagingSenderId: "890421150034",
  appId: "1:890421150034:web:05abcb3cd455233bd97a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
export const db = getFirestore(app);
