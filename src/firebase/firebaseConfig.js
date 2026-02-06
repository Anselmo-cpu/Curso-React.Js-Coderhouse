// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmU0bkb6fvxIzC7ggAHrq9Q5nAYG_0hgw",
  authDomain: "ansel-pedals.firebaseapp.com",
  projectId: "ansel-pedals",
  storageBucket: "ansel-pedals.firebasestorage.app",
  messagingSenderId: "742347510976",
  appId: "1:742347510976:web:846557200c8978e9e2c925",
  measurementId: "G-8B93S1T5NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);