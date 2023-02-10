import { signIn } from "../scripts/firebase";

export default function SignIn() {
  const handleSignIn = () => {
    signIn();
  }

  return (
    <p className="h-full text-3xl text-center px-6">👋 Hi, please <button onClick={handleSignIn} className="font-bold text-[var(--color-accent)] underline">sign in</button> with Google to use this live-chat! 👋</p>
  );
}