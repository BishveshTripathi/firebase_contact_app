// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsrcE5z0oaD4ZTV8P2N37vpFDmxrLciD0",
  authDomain: "vite-contact-ae7f0.firebaseapp.com",
  projectId: "vite-contact-ae7f0",
  storageBucket: "vite-contact-ae7f0.appspot.com",
  messagingSenderId: "673161019837",
  appId: "1:673161019837:web:2ab30d3e13ab249153d2d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);