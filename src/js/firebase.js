import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCaLv94wS54ZcbG8YKEDa_e3oGmoQKFBjc',
  authDomain: 'noteballs-23775.firebaseapp.com',
  projectId: 'noteballs-23775',
  storageBucket: 'noteballs-23775.appspot.com',
  messagingSenderId: '519737776026',
  appId: '1:519737776026:web:a42c49379bc33aea164c23'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export {db}