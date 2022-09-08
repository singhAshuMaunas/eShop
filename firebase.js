
import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyCgqEArGohlak6TdfDqU5-7Lpsdvp6wErY",
  authDomain: "eshop-e7811.firebaseapp.com",
  projectId: "eshop-e7811",
  storageBucket: "eshop-e7811.appspot.com",
  messagingSenderId: "384475458255",
  appId: "1:384475458255:web:2a3eee6658a9b1c6d425ba",
  measurementId: "G-K9TXNVX5L8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };