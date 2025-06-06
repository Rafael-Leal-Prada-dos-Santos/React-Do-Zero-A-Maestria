import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDI1FOP0Rh39xOftXrhXzpPyp4mUakZYbc",
  authDomain: "reactdozero-miniblog.firebaseapp.com",
  projectId: "reactdozero-miniblog",
  storageBucket: "reactdozero-miniblog.firebasestorage.app",
  messagingSenderId: "357738496269",
  appId: "1:357738496269:web:fc5418955ca75b8ee5b044",
  measurementId: "G-5JSM2F9ZG7"
};

const app = initializeApp(firebaseConfig);

const db = getFireStore(app)

export {db};