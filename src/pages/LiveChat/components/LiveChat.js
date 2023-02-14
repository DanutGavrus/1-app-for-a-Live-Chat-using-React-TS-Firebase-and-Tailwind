import { useEffect, useRef, useState } from "react";
import { collection, getFirestore, orderBy, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import CategoriesList from "./categories/CategoriesList";
import Message from "./messages/Message";
import MessagesBar from "./messages/MessagesBar";
import { useOutletContext } from "react-router-dom";
import Loading from "../../../reusable-components/Loading";
import Error from "../../../reusable-components/Error";

export default function LiveChat({ categoriesList }) {
  const context = useOutletContext();
  const app = context?.app;

  const [categoryId, setCategoryId] = useState(categoriesList[0].id);
  const [chatHeader, setChatHeader] = useState(categoriesList[0].unicode + " " + categoriesList[0].title);

  const messagesListDb = collection(getFirestore(app), "messagesList");
  const [messagesListCollection, loading, error] = useCollection(query(messagesListDb, where("categoryId", "==", categoryId), orderBy("timestamp")));
  const messagesList = messagesListCollection?.docs?.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });

  const messagesListRef = useRef();
  useEffect(() => {
    if (messagesList?.length > 0) {
      messagesListRef?.current?.scrollTo(0, messagesListRef?.current?.scrollHeight);
    }
  }, [messagesList]);

  return (
    <>
      <div className="flex flex-col overflow-y-hidden relative">
        <CategoriesList categoriesList={categoriesList} setCategoryId={setCategoryId} setChatHeader={setChatHeader} />
      </div>
      <div ref={messagesListRef} className="relative overflow-y-scroll scrollbar-fancy flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
        <h1 className="sticky top-0 py-6 text-center text-2xl backdrop-blur-sm">{chatHeader}</h1>
        {loading && <Loading classNameToAdd="my-auto text-2xl" />}
        {error && <Error error={error} wrapperClassName="my-auto" />}
        {!loading && !error && messagesList?.length === 0 && <p className="my-auto text-center font-bold text-[var(--color-accent)]">There are no messages for this category yet. Be the first to leave a new one!</p>}
        {!loading && !error && messagesList?.length > 0 &&
          <ul>
            {messagesList.map((message) => {
              return <Message key={message.id} message={message} />
            })}
          </ul>
        }

        <MessagesBar categoryId={categoryId} messagesListDb={messagesListDb} messagesListRef={messagesListRef} />
      </div>
    </>
  );
}

// TODO: Add messages pagination