// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz7bgSYbcgj7HmZWpWAsT6cw8b5gUfMDs",
  authDomain: "netflix-gpt-e0d22.firebaseapp.com",
  projectId: "netflix-gpt-e0d22",
  storageBucket: "netflix-gpt-e0d22.appspot.com",
  messagingSenderId: "101513566467",
  appId: "1:101513566467:web:4daaa2ea64dfcf24e4f136",
  measurementId: "G-P1D664V6S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();