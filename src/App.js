import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { auth } from "./scripts/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import RootLayout from "./layouts/RootLayout";
import LiveChat from "./pages/LiveChat";

function App() {
  const [user, loading, error] = useAuthState(auth);

  // TODO: Ok to pass user like this in app?
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout displayName={user?.displayName ? user.displayName : ""} loading={loading} error={error} />}>
      <Route index element={user && !loading && !error && <LiveChat user={user} />} />
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
