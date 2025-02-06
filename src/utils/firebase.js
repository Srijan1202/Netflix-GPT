// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
    apiKey: "AIzaSyAWKeuj0XgghsMBrafVqsiQnpOzvDJcvzg",
    authDomain: "netflix-gpt-1604a.firebaseapp.com",
  projectId: "netflix-gpt-1604a",
  storageBucket: "netflix-gpt-1604a.firebasestorage.app",
  messagingSenderId: "25576489292",
  appId: "1:25576489292:web:d8becf3231f2d1bf70cfe9",
  measurementId: "G-4DB0CNY7N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
