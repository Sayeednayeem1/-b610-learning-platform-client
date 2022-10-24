// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8W2KgUkfUhARTsDjvLiI1hPLHBU70Sq8",
  authDomain: "auth-assignment-repo.firebaseapp.com",
  projectId: "auth-assignment-repo",
  storageBucket: "auth-assignment-repo.appspot.com",
  messagingSenderId: "437178117910",
  appId: "1:437178117910:web:840ac42c877e13571d2a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;