import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CategoriesList from "../components/categories/CategoriesList";
import MessagesList from "../components/messages/MessagesList";

export default function LiveChat() {
  const user = useOutletContext();
  const [chatHeader, setChatHeader] = useState("Loading...");
  const [categoryId, setCategoryId] = useState("");

  return (
    <>
      {user &&
        <div className="h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-main">
          <div className="flex flex-col overflow-y-auto relative">
            <CategoriesList setChatHeader={setChatHeader} setCategoryId={setCategoryId} />
          </div>
          <div className="relative overflow-y-auto scrollbar-fancy flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
            <h1 className="sticky top-0 py-6 text-center text-2xl backdrop-blur-sm">{chatHeader}</h1>
            <MessagesList categoryId={categoryId} />
          </div>
        </div>
      }
    </>
  );
}