// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM7--UHmPxp_k3APPrljU1XB1EtyExUqc",
  authDomain: "lastapi-d6b5e.firebaseapp.com",
  projectId: "lastapi-d6b5e",
  storageBucket: "lastapi-d6b5e.appspot.com",
  messagingSenderId: "518842752879",
  appId: "1:518842752879:web:952616e026dabe62dc129a",
  measurementId: "G-3624XENFS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
