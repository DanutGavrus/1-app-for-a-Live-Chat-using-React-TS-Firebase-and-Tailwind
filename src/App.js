import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LiveChat from "./pages/LiveChat";
import { auth, signIn } from "./scripts/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading";
import SignIn from "./pages/SignIn";

function App() {
  const [user, loading] = useAuthState(auth);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout displayName={user && user.displayName} />}>
      <Route index element={<>
        {loading && <Loading />}
        {!loading && !user && <SignIn signIn={signIn} />}
        {!loading && user && <LiveChat categories={[
          {
            id: 1,
            src: "assets/icons/loupe.png",
            title: "Coffee and stories",
            description: "Lorem ipsum dolor sit amet..."
          },
          {
            id: 2,
            src: "assets/icons/loupe.png",
            title: "Outdoor activities",
            description: "Consectetur adipisicing elit..."
          },
          {
            id: 3,
            src: "assets/icons/loupe.png",
            title: "Gaming",
            description: "Unde id eum consectetur magni..."
          },
          {
            id: 4,
            src: "assets/icons/loupe.png",
            title: "Book club",
            description: "Soluta blanditiis dolore veritatis..."
          },
          {
            id: 5,
            src: "assets/icons/loupe.png",
            title: "Movie club",
            description: "Harum dignissimos suscipit voluptatem..."
          }
        ]} />}</>}>
      </Route>
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
