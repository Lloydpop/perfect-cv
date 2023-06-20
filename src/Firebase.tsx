// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
import { getDatabase, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHE310gq9Pi4t2nzj2MkJbIi7bMSSSC2w",
  authDomain: "cv-marker.firebaseapp.com",
  projectId: "cv-marker",
  storageBucket: "cv-marker.appspot.com",
  messagingSenderId: "464783514735",
  appId: "1:464783514735:web:9e3f2f28136d95b57f419a",
};

// Initialize Firebase
const fireDb = initializeApp(firebaseConfig);
const database = getDatabase(fireDb);
export const cvRef = ref(database, "cv-builder");
