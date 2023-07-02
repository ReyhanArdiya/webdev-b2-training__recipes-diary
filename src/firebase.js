// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxE9terLNU-Ryf6VLPaxOajM98EVyUl54",
    authDomain: "recipes-diary-19f92.firebaseapp.com",
    projectId: "recipes-diary-19f92",
    storageBucket: "recipes-diary-19f92.appspot.com",
    messagingSenderId: "643066249377",
    appId: "1:643066249377:web:09bfa59e9af1a9b30330e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
