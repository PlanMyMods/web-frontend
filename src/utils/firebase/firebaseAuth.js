import { auth } from "./firebaseInit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Sign out
export const signOutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("There was an error signing out:\n" + error);
    });
};

// Sign in with popup && Google as the provider
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  await signInWithPopup(auth, googleProvider)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.error(error);
    });
};

// Sign in with Email and password
export const emailSignIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Register with Email and password
export const emailRegister = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error);
    });
};
