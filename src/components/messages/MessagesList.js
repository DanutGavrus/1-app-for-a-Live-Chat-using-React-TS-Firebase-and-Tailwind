import Message from "./Message";

export default function MessagesList({ messagesList }) {
  return (
    <>
      <ul>
        {messagesList.map((message) => {
          return <Message key={message.id} message={message} />
        })}
      </ul>
    </>
  );
}