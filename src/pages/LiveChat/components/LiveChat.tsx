import { useOutletContext } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { collection, getFirestore, orderBy, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import CategoriesList from "./categories/CategoriesList";
import Loading from "../../../reusable-components/Loading"
import Error from "../../../reusable-components/Error";
// import MessagesList from "./messages/MessagesList";
import { CategoryType } from "../LiveChatPage";

type Props = {
  categoriesList: CategoryType[]
}

export default function LiveChat({ categoriesList }: Props) {
  const { app } = useOutletContext() as LiveChatContext;

  const [categoryId, setCategoryId] = useState(categoriesList[0].id);
  const [chatHeader, setChatHeader] = useState(`${categoriesList[0].unicode} ${categoriesList[0].title}`);

  const messagesListDb = collection(getFirestore(app), "messagesList");
  const [messagesListCollection, loading, error] = useCollection(query(messagesListDb, where("categoryId", "==", categoryId), orderBy("timestamp")));
  const messagesList = messagesListCollection?.docs?.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });

  const categoriesBtnRef = useRef<HTMLElement>(null);
  const cateogiresListRef = useRef<HTMLElement>(null);
  const messagesListRef = useRef<HTMLElement>(null);
  const toggleShowCategories = () => {
    if (cateogiresListRef?.current?.classList?.contains("hidden")) {
      cateogiresListRef.current.classList.remove("hidden");
      cateogiresListRef.current.classList.add("flex");
      messagesListRef?.current?.classList?.remove("flex");
      messagesListRef?.current?.classList?.add("hidden");
    } else {
      cateogiresListRef?.current?.classList.remove("flex");
      cateogiresListRef?.current?.classList.add("hidden");
      messagesListRef?.current?.classList?.remove("hidden");
      messagesListRef?.current?.classList?.add("flex");
    }
  }
  useEffect(() => {
    toggleShowCategories();
  }, []);

  return (
    <>
      <CategoriesList innerRef={cateogiresListRef} categoriesList={categoriesList} setCategoryId={setCategoryId} setChatHeader={setChatHeader} toggleShowCategories={toggleShowCategories} />

      {/* <div ref={messagesListRef} className="relative hidden sm:flex flex-col col-span-4 sm:col-span-3 overflow-y-scroll scrollbar-fancy rounded-l-xl rounded-r-md bg-black bg-opacity-5">
        <div className="flex items-center sticky top-0 py-4 sm:py-6 backdrop-blur-sm">
          <button ref={categoriesBtnRef} onClick={toggleShowCategories} className="visible sm:hidden ml-5 text-3xl">≡</button>
          <h1 className="w-[83%] sm:w-[100%] mx-auto">{chatHeader}</h1>
        </div>

        {loading && <Loading wrapperClassNameToAdd="my-auto" />}
        {error && <Error error={error} wrapperClassName="my-auto" />}
        {!loading && !error && <MessagesList categoryId={categoryId} messagesList={messagesList} messagesListRef={messagesListRef} messagesListDb={messagesListDb} />}
      </div> */}
    </>
  );
}
