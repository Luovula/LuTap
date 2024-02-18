// firebase-config.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace these with your Firebase project settings
const firebaseConfig = {
    apiKey: "AIzaSyCkFntmSt6KXXiSEQ7snwlbckA6amLqqno",
    authDomain: "lutap-cd065.firebaseapp.com",
    projectId: "lutap-cd065",
    storageBucket: "lutap-cd065.appspot.com",
    messagingSenderId: "475591860425",
    appId: "1:475591860425:web:540edec79d2a3b5b932d18",
    measurementId: "G-3DNCE87087"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
