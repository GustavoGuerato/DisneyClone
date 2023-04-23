import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJkHy8a2UodX-w-GPZ38JjlcpZHWmyqso",
  authDomain: "disneyclone-dfef0.firebaseapp.com",
  projectId: "disneyclone-dfef0",
  storageBucket: "disneyclone-dfef0.appspot.com",
  messagingSenderId: "104548985443",
  appId: "1:104548985443:web:c6c21ba8b0f3ccdff4a656",
  measurementId: "G-97TZ6B62LN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
