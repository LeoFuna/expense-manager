import { credential } from 'firebase-admin';
import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

const apps = getApps();

const appFound = apps.find(({ name }) => name === 'AdminApp');

const app = appFound
  ? appFound
  : initializeApp(
      {
        credential: credential.cert(serviceAccount),
      },
      `AdminApp`
    );

/**
 * @description Firebase db used for server-side operations
 */
export const dbAdmin = getFirestore(app);
