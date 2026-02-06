// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // IMPORTAR FIRESTORE

const firebaseConfig = {
  apiKey: "AIzaSyBmU0bkb6fvxIzC7ggAHrq9Q5nAYG_0hgw",
  authDomain: "ansel-pedals.firebaseapp.com",
  projectId: "ansel-pedals",
  storageBucket: "ansel-pedals.firebasestorage.app",
  messagingSenderId: "742347510976",
  appId: "1:742347510976:web:846557200c8978e9e2c925",
  measurementId: "G-8B93S1T5NW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar Firestore y exportarlo
export const db = getFirestore(app);

export default app;
