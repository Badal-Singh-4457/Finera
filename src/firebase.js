// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6B52HHKZrkCDIv-673vQV_qxu3i4u68",
  authDomain: "finera-48cf3.firebaseapp.com",
  projectId: "finera-48cf3",
  storageBucket: "finera-48cf3.appspot.com",
  messagingSenderId: "597586699108",
  appId: "1:597586699108:web:d76b298d721cd9985f1071",
  measurementId: "G-NDB7BLJKTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };