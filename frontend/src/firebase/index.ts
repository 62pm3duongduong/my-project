// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9yyQUgon7rXUSgDJQGc8SkeTc4pHFg4A",
  authDomain: "otp-mess-a91d2.firebaseapp.com",
  projectId: "otp-mess-a91d2",
  storageBucket: "otp-mess-a91d2.appspot.com",
  messagingSenderId: "431596681830",
  appId: "1:431596681830:web:fb97c469e6657638658ba7",
  measurementId: "G-2N53TDGNJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
