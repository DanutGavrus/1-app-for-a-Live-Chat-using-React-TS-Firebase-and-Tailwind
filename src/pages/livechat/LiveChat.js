import { useState } from "react";
import CategoriesList from "../../components/categories/CategoriesList";
import MessagesListWrapper from "../../components/messages/MessagesListWrapper";

export default function LiveChat({ categoriesList }) {
  const [categoryId, setCategoryId] = useState(categoriesList[0].id);
  const [chatHeader, setChatHeader] = useState(categoriesList[0].unicode + " " + categoriesList[0].title);

  return (
    <>
      <div className="flex flex-col overflow-y-auto relative">
        <CategoriesList categoriesList={categoriesList} setCategoryId={setCategoryId} setChatHeader={setChatHeader} />
      </div>
      <div className="relative overflow-y-auto scrollbar-fancy flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
        <h1 className="sticky top-0 py-6 text-center text-2xl backdrop-blur-sm">{chatHeader}</h1>
        <MessagesListWrapper categoryId={categoryId} />
      </div>
    </>
  );
}