// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwgPhYZjvwxTe554jdW9rTF1nReiZFfiI",
  authDomain: "portfolio-communcations.firebaseapp.com",
  projectId: "portfolio-communcations",
  storageBucket: "portfolio-communcations.appspot.com",
  messagingSenderId: "316006959661",
  appId: "1:316006959661:web:cf36dbba119e0eabfa46a4",
  measurementId: "G-B6MFCYRC0F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
