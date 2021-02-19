import firebase from "firebase/app";
import "firebase/auth";
import { config } from 'dotenv';
config();

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxB8d0jS2h_vkvk8TnqD4vqXhto_t6geM",
    authDomain: "messenger-app-test-ce448.firebaseapp.com",
    projectId: "messenger-app-test-ce448",
    storageBucket: "messenger-app-test-ce448.appspot.com",
    messagingSenderId: "861606702743",
    appId: "1:861606702743:web:cd3b2a0414da0c479b03d2"
});

export const auth = firebaseApp.auth();
export default firebaseApp;
