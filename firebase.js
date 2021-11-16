// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTfwrAscya3XQ4Cn1Zfs4HFD0HkY68QI",
  authDomain: "mypms-3c924.firebaseapp.com",
  projectId: "mypms-3c924",
  storageBucket: "mypms-3c924.appspot.com",
  messagingSenderId: "1091381381360",
  appId: "1:1091381381360:web:b475e89d8e36671c419a35",
  measurementId: "G-LSPKKEGC8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//firebase login
//firebase init
//firebase deploy