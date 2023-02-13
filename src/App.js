import { initializeApp } from "firebase/app";
import { firebaseConfig, checkForSignInErrors } from "./scripts/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import SignIn from "./pages/SignIn";
import LiveChatPage from "./pages/LiveChatPage";

function App() {
  const app = initializeApp(firebaseConfig);

  const [user, loading, error] = useAuthState(getAuth(app));
  if (!loading && !error && !user) {
    checkForSignInErrors(app);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout app={app} user={user} />}>
      <Route index element={
        <>
          {loading && <p className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Loading...</p>}
          {error && <p className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Something went wrong. Error: {error.message}.</p>}
          {!loading && !error && !user && <SignIn />}
          {user && <LiveChatPage />}
        </>
      } />
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// TODO: Add custom error page
// TODO: Add custom 404 page