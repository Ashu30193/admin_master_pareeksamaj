import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyArv3_mzxE3aYeNXJDzcLw7fXr8SQNBMzY',
  authDomain: 'ami-homecare.firebaseapp.com',
  projectId: 'ami-homecare',
  storageBucket: 'ami-homecare.appspot.com',
  messagingSenderId: '700473388051',
  appId: '1:700473388051:web:baf6279f85c3bed756e3e6',
  measurementId: 'G-HWBE6RWTM8',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
