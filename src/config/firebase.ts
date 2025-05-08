// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC9BSVwmacXFc65czR8KGtcY4RQX8rpzsY',
  authDomain: 'job-board-cada9.firebaseapp.com',
  projectId: 'job-board-cada9',
  storageBucket: 'job-board-cada9.firebasestorage.app',
  messagingSenderId: '1001821791590',
  appId: '1:1001821791590:web:40e57a9791920e1db494a7',
  measurementId: 'G-0MCTF3NN5R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
