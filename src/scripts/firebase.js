import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDIvHMVWikWd_YQgeDiZh3QtVa_LnLosHI",
  authDomain: "live-chat-bde08.firebaseapp.com",
  projectId: "live-chat-bde08",
  storageBucket: "live-chat-bde08.appspot.com",
  messagingSenderId: "570171681471",
  appId: "1:570171681471:web:3d8de74a8f3e511730340a",
  measurementId: "G-JM0FJBMNDY"
};
const app = initializeApp(firebaseConfig);

// Provide sign in with Google
const auth = getAuth();
const signIn = () => {
  signInWithRedirect(auth, new GoogleAuthProvider());
};

// TODO: Provide sign out

export { auth, app, signIn };