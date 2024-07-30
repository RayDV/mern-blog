// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d00b1.firebaseapp.com",
  projectId: "mern-blog-d00b1",
  storageBucket: "mern-blog-d00b1.appspot.com",
  messagingSenderId: "183763155409",
  appId: "1:183763155409:web:04275876eec1b95f2dc8f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);