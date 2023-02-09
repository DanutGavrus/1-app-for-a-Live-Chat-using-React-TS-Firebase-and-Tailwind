import Message from "./Message";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../scripts/firebase";
import { query, collection, where, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { useOutletContext } from "react-router-dom";

// TODO: Messages pagination
const MessagesList = forwardRef((_props, ref) => {
  const user = useOutletContext();

  const [categoryId, setCategoryId] = useState(0);
  const [chatHeader, setChatHeader] = useState("Loading...");

  useImperativeHandle(ref, () => ({
    refreshMessagesList(categoryId, chatHeader) {
      setCategoryId(categoryId);
      setChatHeader(chatHeader);
    }
  }));

  const messagesListDb = collection(firestore, "messagesList");
  const [messagesListCollection, loadingMessages, errorMessages] = useCollection(query(messagesListDb, where("categoryId", "==", categoryId), orderBy("timestamp")));
  const [messagesList, setMessagesList] = useState([]);

  const sendMessageRef = useRef();

  useEffect(() => {
    if (messagesListCollection?.docs?.length > 0) {
      setMessagesList(messagesListCollection.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      }));
    } else {
      setMessagesList([]);
    }
  }, [messagesListCollection]);

  const handleSendMessage = (key) => {
    // TOASK: Correct way to implement this?
    if (key === 'Enter' && sendMessageRef?.current?.value?.length > 0) {
      // TODO: Clear message bar only after call succeeds
      addDoc(messagesListDb, {
        categoryId: categoryId,
        userId: user.uid,
        userIcon: user.photoURL,
        userDisplayName: user.displayName,
        userEMail: user.email,
        content: sendMessageRef.current.value,
        timestamp: serverTimestamp()
      });

      sendMessageRef.current.value = "";
    }
  }

  return (
    <>
      <h1 className="sticky top-0 py-6 text-center text-2xl backdrop-blur-sm">{chatHeader}</h1>
      {loadingMessages && !errorMessages && <p className="px-6 py-1 text-center font-bold text-[var(--color-accent)]">Loading...</p>}
      {!loadingMessages && errorMessages && <p className="px-6 py-1 text-center font-bold text-[var(--color-accent)]">Something went wrong. Please check your internet connection or try again later.</p>}
      {!loadingMessages && !errorMessages &&
        <>
          {messagesList?.length > 0 &&
            <ul>
              {messagesList.map((message) => {
                return <Message key={message.id} message={message} />
              })}
            </ul>
          }
          {messagesList?.length === 0 && <p className="px-6 py-1 text-center font-bold text-[var(--color-accent)]">There are no messages for this category yet. Be the first to leave a new one!</p>}
          <div className="sticky bottom-0 mt-auto grid grid-cols-12">
            <input ref={sendMessageRef} type="text" onKeyDown={(e) => handleSendMessage(e.key)} placeholder="Send a message..." className="h-10 col-span-11 pl-3 rounded-bl-xl box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
            {sendMessageRef?.current?.value?.length === 0 && <button className="h-10 bg-[var(--color-aux)] rounded-tr-xl col-span-1">{"⇐"}</button>}
            {sendMessageRef?.current?.value?.length > 0 && <button onClick={() => handleSendMessage('Enter')} className="h-10 bg-[var(--color-aux)] rounded-tr-xl col-span-1">{"⬀"}</button>}
          </div>
        </>
      }
    </>
  );
});

export default MessagesList;
