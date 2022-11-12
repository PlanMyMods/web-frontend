import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize auth && firestore with the 'firebaseApp' property
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export default firebaseApp;
