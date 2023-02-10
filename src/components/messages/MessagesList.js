import Message from "./Message";
import MessagesBar from "./MessagesBar";

export default function MessagesList({ categoryId, messagesList, messagesListDb }) {

  return (
    <>
      {messagesList?.length > 0 &&
        <ul>
          {messagesList.map((message) => {
            return <Message key={message.id} message={message} />
          })}
        </ul>
      }
      {messagesList?.length === 0 &&
        <p className="px-6 py-1 text-center font-bold text-[var(--color-accent)]">There are no messages for this category yet. Be the first to leave a new one!</p>
      }

      <MessagesBar categoryId={categoryId} messagesListDb={messagesListDb} />
    </>
  );
}
