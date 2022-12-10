import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAPuTvOs6Zc9h36Z61VUYc_GLgpeFpJCmc',
  authDomain: 'homefolks-chat.firebaseapp.com',
  projectId: 'homefolks-chat',
  storageBucket: 'homefolks-chat.appspot.com',
  messagingSenderId: '357696784273',
  appId: '1:357696784273:web:df954ed69587468c74fc30',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
