import Message from "./Message";
import { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../scripts/firebase";
import { query, collection, where, orderBy } from "firebase/firestore";

export default function MessagesList({ currentCategoryId }) {
  const [messagesListCollection, loading, error] = useCollection(query(collection(firestore, "messagesList"), where("categoryId", "==", currentCategoryId, orderBy("timestamp"))));
  const [messagesList, setMessagesList] = useState([]);
  console.log(messagesList[0]?.content);

  useEffect(() => {
    if (messagesListCollection?.docs?.length > 0) {
      setMessagesList(messagesListCollection.docs.map((doc) => {
        console.log(doc);
        return { id: doc.id, ...doc.data() }
      }));
    }
  }, [messagesListCollection]);

  return (
    <>
      <ul>
        {/* {messagesList.map((message) => {
          return <Message key={message.id} message={message} />
        })} */}
      </ul>
    </>
  );
}