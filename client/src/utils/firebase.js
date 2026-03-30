
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervio-509bb.firebaseapp.com",
  projectId: "intervio-509bb",
  storageBucket: "intervio-509bb.firebasestorage.app",
  messagingSenderId: "875389259784",
  appId: "1:875389259784:web:324ba18277c7639e2641bd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}