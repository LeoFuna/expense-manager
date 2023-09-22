import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const apps = getApps();

const appFound = apps.find(({ name }) => name === 'DefaultApp');

const app = appFound ? appFound : initializeApp(firebaseConfig, 'DefaultApp');
export const db = getFirestore(app);