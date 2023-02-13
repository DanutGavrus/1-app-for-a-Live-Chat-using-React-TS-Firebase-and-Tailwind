import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import SignIn from "./pages/SignIn";
import LiveChatPage from "./pages/LiveChatPage";
import NotFound from "./pages/NotFound";
import LiveChatError from "./pages/LiveChatError";

function App() {
  const app = initializeApp({
    apiKey: "AIzaSyDIvHMVWikWd_YQgeDiZh3QtVa_LnLosHI",
    authDomain: "live-chat-bde08.firebaseapp.com",
    projectId: "live-chat-bde08",
    storageBucket: "live-chat-bde08.appspot.com",
    messagingSenderId: "570171681471",
    appId: "1:570171681471:web:3d8de74a8f3e511730340a",
    measurementId: "G-JM0FJBMNDY"
  });

  const [user, loading, error] = useAuthState(getAuth(app));

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout app={app} user={user} />}>
      <Route index errorElement={<LiveChatError />} element={
        <>
          {loading && <p className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Loading...</p>}
          {error && <p className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Something went wrong. Error: {error.message}.</p>}
          {!loading && !error && !user && <SignIn />}
          {user && <LiveChatPage />}
        </>
      } />
      <Route path="*" element={<NotFound />} />
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// TODO: Get firestore db only if we have a user?
// TODO: Firestore security for calls
// TODO: BUG Some iOS users may not login