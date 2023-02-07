import Message from "./Message";
import { useState, useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../scripts/firebase";
import { query, collection, where, orderBy, addDoc, serverTimestamp } from "firebase/firestore";

// TODO: Messages pagination
export default function MessagesList({ categoryId, user }) {
  const messagesListDb = collection(firestore, "messagesList");
  // TODO: Check how many times messages list is loaded
  const [messagesListCollection, loadingMessages, errorMessages] = useCollection(query(messagesListDb, where("categoryId", "==", categoryId), orderBy("timestamp")));
  const [messagesList, setMessagesList] = useState([]);
  const [messageContent, setMessageContent] = useState("");

  const sendMessageRef = useRef();

  useEffect(() => {
    setMessagesList([]);
    if (messagesListCollection?.docs?.length > 0) {
      setMessagesList(messagesListCollection.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      }));
    }
  }, [messagesListCollection]);

  const handleSendMessage = (key) => {
    // TODO: Correct way to implement this?
    if (key === 'Enter' && messageContent?.length > 0) {
      addDoc(messagesListDb, {
        categoryId: categoryId,
        userId: user.uid,
        userIcon: user.photoURL,
        userDisplayName: user.displayName,
        userEMail: user.email,
        content: messageContent,
        timestamp: serverTimestamp()
      });

      setMessageContent("");
      sendMessageRef.current.value = "";
    }
  }

  return (
    <>
      {loadingMessages && !errorMessages && <p className="px-6 py-1 text-center font-bold text-[var(--color-accent)]">Loading...</p>}
      {!loadingMessages && errorMessages && <p className="px-6 py-1 text-center font-bold text-[var(--color-accent)]">Something went wrong. Please check your internet connection or try again later.</p>}
      {!loadingMessages && !errorMessages &&
        <>
          {messagesList?.length > 0 &&
            <ul>
              {messagesList.map((message) => {
                return <Message key={message.id} user={user} message={message} />
              })}
            </ul>
          }
          {messagesList?.length === 0 && <p className="px-6 py-1 text-center font-bold text-[var(--color-accent)]">There are no messages for this category yet. Be the first to leave a new one!</p>}
          <div className="sticky bottom-0 mt-auto grid grid-cols-12">
            <input ref={sendMessageRef} type="text" onKeyDown={(e) => handleSendMessage(e.key)} onChange={(e) => { setMessageContent(e.target.value) }} placeholder="Send a message..." className="h-10 col-span-11 pl-3 rounded-bl-xl box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
            {messageContent?.length === 0 && <button className="h-10 bg-[var(--color-aux)] rounded-tr-xl col-span-1">{"⇐"}</button>}
            {messageContent?.length > 0 && <button onClick={() => handleSendMessage('Enter')} className="h-10 bg-[var(--color-aux)] rounded-tr-xl col-span-1">{"⬀"}</button>}
          </div>
        </>
      }
    </>
  );
}