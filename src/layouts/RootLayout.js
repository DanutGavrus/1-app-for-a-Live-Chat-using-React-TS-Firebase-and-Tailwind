import { Outlet } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth, signIn } from "../scripts/firebase";

// TODO: Look over useSignInWithGoogle and useSignOut from react firebase hooks
export default function RootLayout({ displayName, loading, error }) {

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
        {!loading && error && <p className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Something went wrong. Error name: {error.name}. Error message: {error.message}.</p>}
        {!loading && displayName?.length === 0 &&
          <>
            <p className="h-full text-3xl text-center px-6">👋 Hi, please <button onClick={handleSignIn} className="font-bold text-[var(--color-accent)] underline">sign in</button> with Google to use this live-chat! 👋</p>
          </>
        }
        {!loading && displayName?.length > 0 &&
          <>
            <p className="text-3xl text-center px-6">👋 Hi, {displayName.split(" ")[0]}! 👋</p>
            <button onClick={handleSignOut} className="w-max mx-auto align-middle text-xs font-bold text-[var(--color-accent)] underline">Sign out</button>
          </>}
      </header>

      <Outlet />
    </div>
  );
}