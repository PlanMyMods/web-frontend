import { auth } from "./firebaseInit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

// Sign out
export const signOutUser = async () => {
  return signOut(auth);
};

// Sign in with popup && Google as the provider
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  return signInWithPopup(auth, googleProvider);
};

// Sign in with Email and password
export const emailSignIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Register with Email and password
export const emailRegister = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const updateUserProfile = (updatedUserObj) => {
  return updateProfile(auth.currentUser, updatedUserObj);
};
