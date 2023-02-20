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
import { setTheme } from "./scripts/theme";
import firebase from "./scripts/firebase";

function App() {
  setTheme();

  const app = initializeApp(firebase.config);

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

