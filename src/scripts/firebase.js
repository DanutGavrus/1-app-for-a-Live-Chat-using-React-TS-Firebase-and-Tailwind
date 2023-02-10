import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Firestore security for calls
// TODO: useMemo for firestore data?
// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDIvHMVWikWd_YQgeDiZh3QtVa_LnLosHI",
  authDomain: "live-chat-bde08.firebaseapp.com",
  projectId: "live-chat-bde08",
  storageBucket: "live-chat-bde08.appspot.com",
  messagingSenderId: "570171681471",
  appId: "1:570171681471:web:3d8de74a8f3e511730340a",
  measurementId: "G-JM0FJBMNDY"
});

// Provide sign in with Google
const auth = getAuth(app);
const signIn = () => {
  signInWithRedirect(auth, new GoogleAuthProvider());
};

// Get Firestore db
// TODO: Get firestore db only if we have a user?
const firestore = getFirestore(app);

export { auth, signIn, firestore };