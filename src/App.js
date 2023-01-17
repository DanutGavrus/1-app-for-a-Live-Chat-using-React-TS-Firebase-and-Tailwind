import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { auth, signIn } from "./scripts/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./pages/Loading";
import SignIn from "./pages/SignIn";

function App() {
  const [user, loading] = useAuthState(auth);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<>
        {loading && <Loading />}
        {!loading && !user && <SignIn signIn={signIn} />}
        {!loading && user && <Home />}
      </>} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
