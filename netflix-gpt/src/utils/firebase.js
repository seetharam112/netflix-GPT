// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMOSvSud4wa7L_wbnjg-Z0e2bfbaHULmA",
  authDomain: "netflixgpt-9ed7c.firebaseapp.com",
  projectId: "netflixgpt-9ed7c",
  storageBucket: "netflixgpt-9ed7c.appspot.com",
  messagingSenderId: "691975213188",
  appId: "1:691975213188:web:68bc72f8dd9aac10e472d1",
  measurementId: "G-TN73SR0EJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth = getAuth();