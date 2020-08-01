import firebase from 'firebase';
import 'firebase/auth';

const Config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKECT,
  messagingSenderId: process.env.MESSANGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURE_MENT_ID,
};
// Initialize Firebase
const firebaseConfig = firebase.initializeApp(Config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebaseConfig, googleAuthProvider, facebookAuthProvider };
