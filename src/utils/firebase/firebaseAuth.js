import { auth } from "./firebaseInit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import AUTH_ERROR_CODES_MAP from "./firebaseAuthErrorCodes";

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

export const getFirebaseErrorMessage = (err) => {
  let errorMessage;

  switch (err.code) {
    case AUTH_ERROR_CODES_MAP.POPUP_CLOSED_BY_USER:
      errorMessage = "Popup was closed by user";
      break;
    case AUTH_ERROR_CODES_MAP.POPUP_BLOCKED:
      errorMessage = "Popup was blocked by browser";
      break;
    case AUTH_ERROR_CODES_MAP.INVALID_EMAIL:
      errorMessage = "Invalid email";
      break;
    case AUTH_ERROR_CODES_MAP.INVALID_PASSWORD:
      errorMessage = "Wrong password";
      break;
    case AUTH_ERROR_CODES_MAP.WEAK_PASSWORD:
      errorMessage = "Password is too weak";
      break;
    case AUTH_ERROR_CODES_MAP.USER_DELETED:
      errorMessage = "User not found";
      break;
    case AUTH_ERROR_CODES_MAP.USER_DISABLED:
      errorMessage = "User disabled";
      break;
    case AUTH_ERROR_CODES_MAP.EMAIL_EXISTS:
      errorMessage = "Email already in use";
      break;
    case AUTH_ERROR_CODES_MAP.OPERATION_NOT_ALLOWED:
      errorMessage = "Operation not allowed";
      break;
    case AUTH_ERROR_CODES_MAP.TOO_MANY_ATTEMPTS_TRY_LATER:
      errorMessage = "Too many requests";
      break;
    default:
      console.log(err.code);
      errorMessage = "Unknown error";
  }

  return errorMessage;
};
