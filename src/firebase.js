import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VUE_APP_FIREBASE_PROJECT_ID+".firebaseapp.com",
    databaseURL: "https://"+import.meta.env.VUE_APP_FIREBASE_PROJECT_ID+"-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "is216---g6---t10",
    storageBucket: import.meta.env.VUE_APP_FIREBASE_PROJECT_ID+".appspot.com",
    messagingSenderId: import.meta.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: "G-5FVEELHFGZ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db