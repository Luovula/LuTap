import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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

export const db = getFirestore(app);

export const storage = getStorage(app);
