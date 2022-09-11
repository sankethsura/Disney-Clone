// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7aSzcifAnKuNU-qerXOuNGMdf2KifgoU",
  authDomain: "disney-clone-1-16344.firebaseapp.com",
  projectId: "disney-clone-1-16344",
  storageBucket: "disney-clone-1-16344.appspot.com",
  messagingSenderId: "447102503671",
  appId: "1:447102503671:web:70d6b0dc0130652539e1f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
