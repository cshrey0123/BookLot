// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZET1gjan9mKYO8NzgPdQt56MPF_UqEFc",
  authDomain: "booklot-cb8b7.firebaseapp.com",
  projectId: "booklot-cb8b7",
  storageBucket: "booklot-cb8b7.appspot.com",
  messagingSenderId: "1000067790963",
  appId: "1:1000067790963:web:fad3aaab25ac60748c1206",
  measurementId: "G-Z825S0KQN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
