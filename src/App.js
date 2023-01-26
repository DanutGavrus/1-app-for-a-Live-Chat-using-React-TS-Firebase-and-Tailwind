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
            unicode: "☕",
            title: "Coffee and stories",
            description: "General topic for any subject out there."
          },
          {
            id: 2,
            unicode: "\🏕️",
            title: "Outdoor activities",
            description: "Feel like discussing about an outside activity?"
          },
          {
            id: 3,
            unicode: "🎮",
            title: "Gaming",
            description: "Just gamers speaking about games."
          },
          {
            id: 4,
            unicode: "📗",
            title: "Book club",
            description: "Share something interesting you've read?."
          },
          {
            id: 5,
            unicode: "📻",
            title: "Music club",
            description: "Tell others about the best sounds you've heard."
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
