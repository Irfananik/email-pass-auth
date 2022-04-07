// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1pLgFfjsz0VfmYWuOgY1v6SWgTrB9xlk",
  authDomain: "email-pass-auth-2e886.firebaseapp.com",
  projectId: "email-pass-auth-2e886",
  storageBucket: "email-pass-auth-2e886.appspot.com",
  messagingSenderId: "316146370270",
  appId: "1:316146370270:web:4a15f1bc3187d27309244f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app