import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCwhcOquAlzLHVxqaciZCC6HIaMXR_6WoY",
  authDomain: "sunhacks-292004.firebaseapp.com",
  databaseURL: "https://sunhacks-292004.firebaseio.com",
  projectId: "sunhacks-292004",
  storageBucket: "sunhacks-292004.appspot.com",
  messagingSenderId: "840917752377",
  appId: "1:840917752377:web:541b8c05438b55be88cbe8",
  measurementId: "G-70KX5M0R0K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;