import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAWKeuj0XgghsMBrafVqsiQnpOzvDJcvzg",
  authDomain: "netflix-gpt-1604a.firebaseapp.com",
  projectId: "netflix-gpt-1604a",
  storageBucket: "netflix-gpt-1604a.firebasestorage.app",
  messagingSenderId: "25576489292",
  appId: "1:25576489292:web:d8becf3231f2d1bf70cfe9",
  measurementId: "G-4DB0CNY7N0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);npm run lint

