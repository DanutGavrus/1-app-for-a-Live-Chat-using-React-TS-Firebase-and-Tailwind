import Message from "../components/Message";
import MessageBar from "./MessageBar";

export default function MessagesList() {
  return (
    <div className="relative overflow-y-auto scrollbar-fancy flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
      <h1 className="sticky top-0 py-3 text-center text-xl backdrop-blur-sm">Messages</h1>
      <ul>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </ul>
      <MessageBar />
    </div>
  );
}