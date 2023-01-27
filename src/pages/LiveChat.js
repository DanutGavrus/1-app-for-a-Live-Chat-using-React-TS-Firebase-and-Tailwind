import { useState } from "react";
import CategoriesList from "../components/CategoriesList";
import MessagesList from "../components/MessagesList";

export default function LiveChat({ categoriesList, messagesList }) {
  const [chatHeader, setChatHeader] = useState(categoriesList.length > 0 ? categoriesList[0].unicode + " " + categoriesList[0].title : "🙁 Sorry, no categories exist. Please contact the admin.");

  return (
    <div className="h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-main">
      <CategoriesList categoriesList={categoriesList} setChatHeader={setChatHeader} />
      <MessagesList messagesList={messagesList} chatHeader={chatHeader} />
    </div>
  );
}