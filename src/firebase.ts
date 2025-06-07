import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const apiKey: string | undefined = process.env.REACT_APP_FIREBASE_API_KEY
const authDomain: string | undefined = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const projectId: string | undefined = process.env.REACT_APP_FIREBASE_PROJECT_ID
const storageBucket: string | undefined = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const messagingSenderId: string | undefined = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const appId: string | undefined = process.env.REACT_APP_FIREBASE_APP_ID
const measurementId: string | undefined = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID



const firebaseConfig = {
    apiKey: 'AIzaSyDKzqT_xAKlgHtAI4GTUAIsjdObPlx5VqU',
    authDomain: 'personalportfolio-308f9.firebaseapp.com',
    projectId: 'personalportfolio-308f9',
    storageBucket: 'personalportfolio-308f9.firebasestorage.app',
    messagingSenderId: '989282599239',
    appId: '1:989282599239:web:c2323945b56b6c889c4c62',
    measurementId: 'G-CFXFDB0CK2'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
