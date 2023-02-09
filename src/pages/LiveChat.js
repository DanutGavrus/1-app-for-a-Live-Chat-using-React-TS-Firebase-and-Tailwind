import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import CategoriesList from "../components/categories/CategoriesList";
import MessagesList from "../components/messages/MessagesList";

export default function LiveChat() {
  const user = useOutletContext();

  // TOASK: Did I implement this ok?
  const messagesListRef = useRef();

  const refreshMessagesList = (categoryId, chatHeader) => {
    messagesListRef?.current?.refreshMessagesList(categoryId, chatHeader);
  }

  return (
    <>
      {user &&
        <div className="h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-main">
          <div className="flex flex-col overflow-y-auto relative">
            <CategoriesList refreshMessagesList={refreshMessagesList} />
          </div>
          <div className="relative overflow-y-auto scrollbar-fancy flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
            <MessagesList ref={messagesListRef} />
          </div>
        </div>
      }
    </>
  );
}