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
      {messagesList.length === 0 && <p className="my-auto font-bold text-center text-accent">There are no messages for this category yet. Be the first to leave a new one!</p>}
      {messagesList.length > 0 &&
        <ul>
          {messagesList.map((message) => {
            return <Message key={message.id} message={message} messagesListDb={messagesListDb} messagesListActionRef={messagesListActionRef} />
          })}
        </ul>
      }

      <MessagesBar categoryId={categoryId} messagesListDb={messagesListDb} messagesListActionRef={messagesListActionRef} />
    </>
  )
}
