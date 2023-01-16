import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDIvHMVWikWd_YQgeDiZh3QtVa_LnLosHI",
  authDomain: "live-chat-bde08.firebaseapp.com",
  projectId: "live-chat-bde08",
  storageBucket: "live-chat-bde08.appspot.com",
  messagingSenderId: "570171681471",
  appId: "1:570171681471:web:3d8de74a8f3e511730340a",
  measurementId: "G-JM0FJBMNDY"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
