import { deleteDoc, doc } from "firebase/firestore";
import { useOutletContext } from "react-router-dom";

export default function Message({ message, messagesListDb, messagesListActionRef }) {
  const { user } = useOutletContext();

  let liClassName = "mb-1 mx-3";
  let pClassName = "block w-fit max-w-[80%] bg-gradient-to-br from-secondary to-primary px-3 py-1 rounded-2xl";
  if (user.uid === message.userId) {
    pClassName += " ml-auto";
  }

  const handleDeleteMessage = () => {
    deleteDoc(doc(messagesListDb, message.id));
    messagesListActionRef.current.action = "deleted";
  }

  return (
    <li className={liClassName}>
      <p className={pClassName}><img src={message.userIcon} alt="" className="w-4 h-4 mb-0.5 inline-block rounded-3xl" /> <a href={`mailto:${message.userEMail}`} target="_blank" rel="noreferrer" className="underline font-bold text-accent">{message.userDisplayName}</a>{": " + message.content}
        {user.uid === message.userId && <button onClick={handleDeleteMessage} className="p-0 ml-1 text-accent text-sm font-bold">🗑</button>}
      </p>
    </li>
  );
}