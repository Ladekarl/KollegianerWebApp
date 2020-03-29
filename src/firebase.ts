import firebase from 'firebase/app';
import "firebase/auth";

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "kollegianer-169c6.firebaseapp.com",
    databaseURL: "https://kollegianer-169c6.firebaseio.com",
    projectId: "kollegianer-169c6",
    storageBucket: "kollegianer-169c6.appspot.com",
    messagingSenderId: "343414260788",
    appId: FIREBASE_APP_ID,
};


const app = firebase.initializeApp(firebaseConfig);
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export default app;