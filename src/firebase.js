import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMotjYf1XrSmYCoWpyAKgzmpYJx3qH0qk",
  authDomain: "linkedin-clone-5c1ec.firebaseapp.com",
  projectId: "linkedin-clone-5c1ec",
  storageBucket: "linkedin-clone-5c1ec.appspot.com",
  messagingSenderId: "815891214720",
  appId: "1:815891214720:web:4e0a9be2e022c61f245165",
  measurementId: "G-HSVKSQQPN4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };