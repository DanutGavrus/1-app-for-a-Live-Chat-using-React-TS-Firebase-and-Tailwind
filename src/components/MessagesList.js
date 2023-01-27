import Message from "../components/Message";
import MessageBar from "./MessageBar";

export default function MessagesList({ messagesList, chatHeader }) {
  // TODO: Add messages pagination
  return (
    <div className="relative overflow-y-auto scrollbar-fancy flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
      <h1 className="sticky top-0 py-6 text-center text-2xl backdrop-blur-sm font-serif">{chatHeader}</h1>
      <ul>
        {messagesList.map((message) => {
          return <Message key={message.id} message={message} />
        })}
      </ul>
      <MessageBar />
    </div>
  );
}