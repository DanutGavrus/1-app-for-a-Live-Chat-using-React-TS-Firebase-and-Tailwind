import { CollectionReference, deleteDoc, doc, DocumentData } from "firebase/firestore";
import { MutableRefObject } from "react";
import { useOutletContext } from "react-router-dom";
import { MessageType } from "../LiveChat";

type Props = {
  message: MessageType,
  messagesListDb: CollectionReference<DocumentData>,
  messagesListActionRef: MutableRefObject<{ action: string; }>
}

export default function Message({ message, messagesListDb, messagesListActionRef }: Props) {
  const { user } = useOutletContext() as LiveChatContext;

  /*SG using defined variables for combining tailwind classes is more of a antipattern in tailwind if is used in one place
    is better to create a custom utility class if it's a style applied on multiple elements
    tailwind has utility classes meant to avoid using names for variables
  */

  const handleDeleteMessage = () => {
    // SG As far as I can see deleteDoc is returning a promise, you can use .then to apply the action to the ref after the promise is fulfilled
    deleteDoc(doc(messagesListDb, message.id)).then(() => {
      messagesListActionRef.current.action = "deleted";
    })
  }

  return (
    <li className='mb-1 mx-3'>
      {/*SG You can use ternary operator in tailwind class*/}
      <p className={`block w-fit max-w-[80%] bg-gradient-to-br from-secondary to-primary px-3 py-1 rounded-2xl ${user?.uid === message.userId ? 'ml-auto' : '' }`}>
        <img src={message.userIcon} alt="" className="w-4 h-4 mb-0.5 inline-block rounded-3xl" />
        <a href={`mailto:${message.userEMail}`} target="_blank" rel="noreferrer" className="underline font-bold text-accent">{message.userDisplayName}</a>
        {`: ${message.content}`}
        {user?.uid === message.userId && <button onClick={handleDeleteMessage} className="p-0 ml-1 text-accent text-sm font-bold">🗑</button>}
      </p>
    </li>
  );
}
