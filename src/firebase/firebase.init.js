// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD17OcAvuRXs3KUgxnHlx6nqT1Md1CFm8M",
  authDomain: "conceptual-project-fe3c9.firebaseapp.com",
  projectId: "conceptual-project-fe3c9",
  storageBucket: "conceptual-project-fe3c9.firebasestorage.app",
  messagingSenderId: "693305380819",
  appId: "1:693305380819:web:f85d97087db5deb7412926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth