import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUnSTzTKczAmfrBcp-W5iQwmtw9h-6WOA",
  authDomain: "chessgamestracker.firebaseapp.com",
  projectId: "chessgamestracker",
  storageBucket: "chessgamestracker.appspot.com",
  messagingSenderId: "548118462221",
  appId: "1:548118462221:web:ab2366432156df46a8ba44",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
