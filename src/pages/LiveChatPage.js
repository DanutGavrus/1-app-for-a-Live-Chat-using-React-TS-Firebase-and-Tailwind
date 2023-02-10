import { useOutletContext } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../scripts/firebase";
import { query, collection, orderBy } from "firebase/firestore";
import { signOut } from "firebase/auth";
import LiveChat from "../components/LiveChat";

export default function LiveChatPage() {
  const user = useOutletContext();

  const handleSignOut = () => {
    signOut(auth);
  }

  const [categoriesListCollection, loading, error] = useCollection(query(collection(firestore, "categoriesList"), orderBy("timestamp")));
  const categoriesList = categoriesListCollection?.docs?.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });

  return (
    <>
      {user &&
        <>
          <p className="text-3xl text-center px-6">👋 Hi, {user.displayName.split(" ")[0]}! 👋</p>
          <button onClick={handleSignOut} className="w-max mx-auto pb-10 align-middle text-xs font-bold text-[var(--color-accent)] underline">Sign out</button>
          <div className="h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-main">
            {loading && <p className="col-span-4 my-auto px-3 text-center font-bold text-[var(--color-accent)]">Loading...</p>}
            {error && <p className="col-span-4 my-auto px-3 text-center font-bold text-[var(--color-accent)]">Something went wrong. Please check your internet connection or try again later.</p>}
            {!loading && !error && categoriesList.length === 0 && <p className="col-span-4 my-auto px-3 text-center font-bold text-[var(--color-accent)]">There are no categories, please contact the administrator!</p>}
            {!loading && !error && categoriesList.length > 0 && <LiveChat categoriesList={categoriesList} />}
          </div>
        </>
      }
    </>
  );
}