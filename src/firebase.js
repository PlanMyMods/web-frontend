import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATZSSD1DZbvcJM_jVKuW3kK618YNiQeEk",
    authDomain: "is216---g6---t10.firebaseapp.com",
    databaseURL: "https://is216---g6---t10-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "is216---g6---t10",
    storageBucket: "is216---g6---t10.appspot.com",
    messagingSenderId: "478869418880",
    appId: "1:478869418880:web:2178f31be438c3f6350765",
    measurementId: "G-5FVEELHFGZ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db