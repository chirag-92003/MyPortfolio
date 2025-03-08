import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDC8VxBUOUMwlfaQiT0CsIleXOOeZP8Ap4",
  authDomain: "portfolio-7a1b3.firebaseapp.com",
  databaseURL: "https://portfolio-7a1b3-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "portfolio-7a1b3",
  storageBucket: "portfolio-7a1b3.appspot.com",
  messagingSenderId: "679345522649",
  appId: "1:679345522649:web:a2a0711d92bd9601c0bbc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); 