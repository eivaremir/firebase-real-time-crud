// Import the functions you need from the SDKs you need

/*import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
*/
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  databaseURL: process.env.REACT_APP_databaseURL,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase

//const firebase = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebase;
