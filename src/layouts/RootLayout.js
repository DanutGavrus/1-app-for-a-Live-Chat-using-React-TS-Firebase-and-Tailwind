import { Outlet } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth, signIn } from "../scripts/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// TODO: Look over useSignInWithGoogle and useSignOut from react firebase hooks
export default function RootLayout() {
  const [user, loading, error] = useAuthState(auth);

  const handleSignIn = () => {
    signIn();
  }

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--color-text)] font-serif">
      <header className="flex flex-col py-10 ">
        {loading && !error && <p className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Loading...</p>}
        {!loading && error && <p className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Something went wrong. Error: {error}.</p>}
        {!loading && !error && !user &&
          <>
            <p className="h-full text-3xl text-center px-6">👋 Hi, please <button onClick={handleSignIn} className="font-bold text-[var(--color-accent)] underline">sign in</button> with Google to use this live-chat! 👋</p>
          </>
        }
        {!loading && !error && user &&
          <>
            <p className="text-3xl text-center px-6">👋 Hi, {user.displayName.split(" ")[0]}! 👋</p>
            <button onClick={handleSignOut} className="w-max mx-auto align-middle text-xs font-bold text-[var(--color-accent)] underline">Sign out</button>
          </>}
      </header>

      <Outlet context={user} />
    </div>
  );
}