import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { addDoc, serverTimestamp } from "firebase/firestore";

export default function MessagesBar({ categoryId, messagesListDb, messagesListActionRef }) {
  const context = useOutletContext();
  const user = context.user;

  const [messageContent, setMessageContent] = useState("");

  const messageInputRef = useRef();

  const handleSendMessage = (key) => {
    if (key === 'Enter' && messageContent.length > 0) {
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
      messageInputRef.current.value = "";
      messagesListActionRef.current.action = "added";
    }
  }

  return (
    <div className="mt-auto sticky bottom-0 grid grid-cols-12">
      <input ref={messageInputRef} type="text" maxLength="500" onKeyDown={(e) => handleSendMessage(e.key)} onChange={(e) => { setMessageContent(e.target.value) }} placeholder="Send a message..." className="h-10 col-span-10 sm:col-span-11 pl-3 rounded-bl-xl box-border border border-transparent focus:outline-none focus:border-accent dark:bg-black" />
      {messageContent.length === 0 && <button className="h-10 bg-auxiliary rounded-tr-xl col-span-2 sm:col-span-1">{"⇐"}</button>}
      {messageContent.length > 0 && <button onClick={() => handleSendMessage('Enter')} className="h-10 bg-auxiliary rounded-tr-xl col-span-2 sm:col-span-1">{"⬀"}</button>}
    </div>
  );
}

// TODO: Maybe replace input with textarea?
// TODO: Add x to clear message text?