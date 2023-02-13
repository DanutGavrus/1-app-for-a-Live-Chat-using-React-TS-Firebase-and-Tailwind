import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { useOutletContext } from "react-router-dom";

export default function SignIn() {
  const context = useOutletContext();
  const app = context.app;

  const handleSignIn = () => {
    signInWithRedirect(getAuth(app), new GoogleAuthProvider());
  }

  return (
    <p className="h-full text-3xl text-center px-6">👋 Hi, please <button onClick={handleSignIn} className="font-bold text-[var(--color-accent)] underline">sign in</button> with Google to use this live-chat! 👋</p>
  );
}