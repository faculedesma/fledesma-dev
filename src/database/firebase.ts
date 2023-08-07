import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbrKZctpkevsAUD6GIHYQeTiiwZTLRqjE',
  authDomain: 'fledesma-dev.firebaseapp.com',
  projectId: 'fledesma-dev',
  storageBucket: 'fledesma-dev.appspot.com',
  appId: '1:63167982375:web:837170408acdcd2fe49702',
  messagingSenderId: 'G-3986R4CBWL'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
