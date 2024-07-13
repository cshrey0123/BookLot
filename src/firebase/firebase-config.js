// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrQOqy6Fy1i3H5GA0sowqqv1z0GLlbqVg",
  authDomain: "book-77783.firebaseapp.com",
  projectId: "book-77783",
  storageBucket: "book-77783.appspot.com",
  messagingSenderId: "580653667800",
  appId: "1:580653667800:web:e802bb6ae3c3d17bf6cead",
  measurementId: "G-04W53KW2JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
