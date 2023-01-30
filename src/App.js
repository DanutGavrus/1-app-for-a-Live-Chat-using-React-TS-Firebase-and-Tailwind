import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LiveChat from "./pages/LiveChat";
import { auth, signIn } from "./scripts/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [user, loading] = useAuthState(auth);
  const [categoriesList, setCategoriesList] = useState([]);
  const [messagesList, setMessagesList] = useState([]);

  // TODO: Get the categories and the messages from Firebase
  useEffect(() => {
    setCategoriesList([
      {
        id: 1,
        unicode: "☕",
        title: "Coffee and stories",
        description: "General topic for any subject out there."
      },
      {
        id: 2,
        unicode: "🏕️",
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
    ]);

    setMessagesList([
      {
        id: 1,
        content: "Salut!",
        user: "Vlad Avram",
        tempIcon: "🎮"
      },
      {
        id: 2,
        content: "Salut.",
        user: "Danut Gavrus",
        tempIcon: "📻"
      },
      {
        id: 3,
        content: "Ce faci?",
        user: "Vlad Avram",
        tempIcon: "🎮"
      },
      {
        id: 4,
        content: "Bine, beau o cafelutsa. Tu ce faci?",
        user: "Danut Gavrus",
        tempIcon: "📻"
      },
      {
        id: 5,
        content: "Da bine, stateam.",
        user: "Vlad Avram",
        tempIcon: "🎮"
      },
      {
        id: 6,
        content: "Cred ca ma duc sa-mi fac si eu o cafelutsa acum ca ai zis.",
        user: "Vlad Avram",
        tempIcon: "🎮"
      },
      {
        id: 7,
        content: "Ba",
        user: "Danut Gavrus",
        tempIcon: "📻"
      },
      {
        id: 8,
        content: "Bine faci :))",
        user: "Danut Gavrus",
        tempIcon: "📻"
      },
      {
        id: 9,
        content: "mda",
        user: "Vlad Avram",
        tempIcon: "🎮"
      },
      {
        id: 10,
        content: "Cf pe seara? Ma gandeam sa te intreb ca sa ceva motiv, asta e doar un text de umplutura pentru a avea un mesaj mai lung.",
        user: "Vlad Avram",
        tempIcon: "🎮"
      },
      {
        id: 11,
        content: "Hmm",
        user: "Danut Gavrus",
        tempIcon: "📻"
      },
      {
        id: 12,
        content: "Trebuia sa ies cu cineva",
        user: "Danut Gavrus",
        tempIcon: "📻"
      },
      {
        id: 13,
        content: "Da nu-i sigura treaba. Text de umplutura ca sa facem un mesaj foarte lung ca sa ii vedem style-ul. Mai trebuie niste text ca sa depasim lungimea maxima a unui rand. Da nu-i sigura treaba. Text de umplutura ca sa facem un mesaj foarte lung ca sa ii vedem style-ul. Mai trebuie niste text ca sa depasim lungimea maxima a unui rand.",
        user: "Danut Gavrus",
        tempIcon: "📻"
      }
    ]);
  }, []);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout displayName={user && user.displayName} />}>
      <Route index element={
        <>
          {loading && <Loading />}
          {!loading && !user && <SignIn signIn={signIn} />}
          {!loading && user && <LiveChat categoriesList={categoriesList} messagesList={messagesList} />}
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
