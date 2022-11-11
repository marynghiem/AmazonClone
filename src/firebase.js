import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIH_93SEXAtK12d4fNR5crRwVC91t1DZI",
  authDomain: "clone-3ade4.firebaseapp.com",
  projectId: "clone-3ade4",
  storageBucket: "clone-3ade4.appspot.com",
  messagingSenderId: "729993136778",
  appId: "1:729993136778:web:4d6fcc7826743be4dc3b73",
  measurementId: "G-XSJVTPF2CT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
