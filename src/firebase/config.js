import { initializeAPP } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIU-D6qe5iEq5TnmU7OJvn5KYVtyQaiKE",
  authDomain: "minibl.firebaseapp.com",
  projectId: "minibl",
  storageBucket: "minibl.appspot.com",
  messagingSenderId: "560516400554",
  appId: "1:560516400554:web:f4c706cbd3e13aa03657d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };