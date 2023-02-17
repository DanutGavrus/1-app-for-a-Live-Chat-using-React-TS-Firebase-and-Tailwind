import { signInWithRedirect, getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { useOutletContext } from "react-router-dom";

export default function SignIn() {
  const context = useOutletContext();
  const app = context?.app;

  const handleSignInWGoogle = () => {
    signInWithRedirect(getAuth(app), new GoogleAuthProvider());
  }

  const handleSignInWApple = () => {
    signInWithRedirect(getAuth(app), new OAuthProvider());
  }

  return (
    <>
      <h1 className="text-2xl text-center">👋 Hi, please <span className="font-bold text-accent">sign in</span> to use this live-chat! 👋</h1>
      <button onClick={handleSignInWGoogle} className="text-lg text-accent underline">Sign in with <span className="font-bold">Google</span></button>
      <button onClick={handleSignInWApple} className="text-lg text-accent underline">Sign in with <span className="font-bold">Apple</span></button>
    </>
  );
}
