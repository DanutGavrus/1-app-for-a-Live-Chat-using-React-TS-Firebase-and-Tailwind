import { useOutletContext } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { query, collection, orderBy, getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import LiveChat from "./components/LiveChat";
import Loading from "../../reusable-components/Loading";
import Error from "../../reusable-components/Error";

export default function LiveChatPage() {
  const context = useOutletContext();
  const app = context?.app;
  const user = context?.user;

  const handleSignOut = () => {
    signOut(getAuth(app));
  }

  const [categoriesListCollection, loading, error] = useCollection(query(collection(getFirestore(app), "categoriesList"), orderBy("timestamp")));
  const categoriesList = categoriesListCollection?.docs?.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });

  return (
    <>
      <p className="text-3xl text-center">👋 Hi, {user?.displayName?.split(" ")[0]}! 👋</p>
      <button onClick={handleSignOut} className="mx-auto text-xs font-bold text-[var(--color-accent)] underline">Sign out</button>
      <div className="mt-10 h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-main">
        {loading && <Loading classNameToAdd="col-span-4 my-auto" />}
        {error && <Error error={error} wrapperClassName="col-span-4 my-auto" />}
        {!loading && !error && categoriesList.length === 0 && <Error error={{ message: "There are no categories, please contact the administrator!" }} wrapperClassName="col-span-4 my-auto" />}
        {!loading && !error && categoriesList.length > 0 && <LiveChat categoriesList={categoriesList} />}
      </div>
    </>
  );
}