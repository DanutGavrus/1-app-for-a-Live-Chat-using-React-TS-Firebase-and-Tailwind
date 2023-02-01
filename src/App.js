import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { auth } from "./scripts/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import RootLayout from "./layouts/RootLayout";
import Loading from "./pages/Loading";
import SignIn from "./pages/SignIn";
import LiveChat from "./pages/LiveChat";

function App() {
  const [user, loading] = useAuthState(auth);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout displayName={user && user.displayName} />}>
      <Route index element={
        <>
          {<Loading />}
          {/* {loading && <Loading />} */}
          {/* {!loading && !user && <SignIn />}
          {!loading && user && <LiveChat />} */}
        </>
      }>
      </Route>
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
