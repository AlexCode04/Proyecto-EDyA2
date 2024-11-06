import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Asegúrate de reemplazar \\n en private_key para mantener el formato PEM
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://pruebafirebase-233d0.appspot.com"
});

export default admin;