import { useEffect, useRef } from "react";
import Message from "./Message";
import MessagesBar from "./MessagesBar";

export default function MessagesList({ categoryId, messagesList, messagesListRef, messagesListDb }) {
  const messagesListActionRef = useRef({ action: "added" }); // added or deleted
  useEffect(() => {
    // For "deleted" we do not want to automatically scroll to bottom
    if (messagesListActionRef?.current?.action === "added") {
      messagesListRef?.current?.scrollTo(0, messagesListRef?.current?.scrollHeight);
    }
  }, [messagesList, messagesListRef]);

  return (
    <>
      <ul>
        {messagesList.map((message) => {
          return <Message key={message.id} message={message} messagesListDb={messagesListDb} messagesListActionRef={messagesListActionRef} />
        })}
      </ul>

      <MessagesBar categoryId={categoryId} messagesListDb={messagesListDb} messagesListActionRef={messagesListActionRef} />
    </>
  )
}
