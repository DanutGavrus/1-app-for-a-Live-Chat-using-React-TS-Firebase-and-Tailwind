import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LiveChatPage from "./pages/LiveChatPage";
import SignIn from "./pages/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./scripts/firebase";

function App() {
  const [user, loading, error] = useAuthState(auth);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout user={user} />}>
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
