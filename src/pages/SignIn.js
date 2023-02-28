import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { useOutletContext } from "react-router-dom";

export default function SignIn() {
  const context = useOutletContext();
  const app = context?.app;

  const handleSignIn = () => {
    signInWithRedirect(getAuth(app), new GoogleAuthProvider());
  }

  return (
    <p className="text-xs sm:text-xl md:text-2xl text-center">👋 Hi, please  pleaseplease <span><button onClick={handleSignIn} className="underline">sign in</button></span> with Google to use this live-chat! 👋</p>
  );
}
