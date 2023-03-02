import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { useOutletContext } from "react-router-dom";

export default function SignIn() {
  const { app } = useOutletContext();

  const handleSignIn = () => {
    signInWithRedirect(getAuth(app), new GoogleAuthProvider());
  }

  return (
    <p className="text-xs sm:text-xl md:text-2xl text-center">👋 Hi, please <span><button onClick={handleSignIn} className="underline">sign in</button></span> with Google to use this live-chat! 👋</p>
  );
}
