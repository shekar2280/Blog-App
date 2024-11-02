// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-16ef2.firebaseapp.com",
  projectId: "blog-16ef2",
  storageBucket: "blog-16ef2.appspot.com",
  messagingSenderId: "1032661745504",
  appId: "1:1032661745504:web:a77ef95c993b2737c42805"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);