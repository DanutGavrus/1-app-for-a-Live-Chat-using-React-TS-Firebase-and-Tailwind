import { collection, orderBy, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import MessagesList from "../../components/messages/MessagesList";
import { firestore } from "../../scripts/firebase";

export default function MessagesListWrapper({ categoryId }) {
  const messagesListDb = collection(firestore, "messagesList");
  const [messagesListCollection, loading, error] = useCollection(query(messagesListDb, where("categoryId", "==", categoryId), orderBy("timestamp")));
  const messagesList = messagesListCollection?.docs?.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });

  return (
    <>
      {loading && <p className="my-auto px-6 py-1 text-center font-bold text-[var(--color-accent)]">Loading...</p>}
      {error && <p className="my-auto px-6 py-1 text-center font-bold text-[var(--color-accent)]">Something went wrong. Please check your internet connection or try again later.</p>}
      {!loading && !error && messagesList && <MessagesList categoryId={categoryId} messagesList={messagesList} messagesListDb={messagesListDb} />}
    </>
  );
}