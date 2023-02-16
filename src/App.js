import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import SignIn from "./pages/SignIn";
import LiveChatPage from "./pages/LiveChat/LiveChatPage";
import NotFound from "./pages/NotFound";
import Error from "./reusable-components/Error";
import Loading from "./reusable-components/Loading";
import { setTheme } from "./scripts/HandleTheme";

function App() {
  setTheme();

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
      <Route index errorElement={<Error />} element={
        <>
          {loading && <Loading />}
          {error && <Error error={error} />}
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

