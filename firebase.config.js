// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJqV6Lj4C_PyNgGsH13gT1Nb6RTg8omuI",
    authDomain: "kalo-chat.firebaseapp.com",
    projectId: "kalo-chat",
    storageBucket: "kalo-chat.appspot.com",
    messagingSenderId: "980782446908",
    appId: "1:980782446908:web:e95bddc3e1807447664639",
    databaseURL: "https://kalo-chat-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig