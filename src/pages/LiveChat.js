import { useState } from "react";
import CategoriesList from "../components/categories/CategoriesList";
import MessagesList from "../components/messages/MessagesList";
import SearchBar from "../components/SearchBar";

export default function LiveChat({ user }) {
  // TODO: Correct way to have this many states?
  const [searchText, setSearchText] = useState("");
  const [chatHeader, setChatHeader] = useState("Loading...");
  const [categoryId, setCategoryId] = useState("");

  return (
    <div className="h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-main">
      <div className="flex flex-col overflow-y-auto relative">
        <SearchBar placeholder="Search categories ..." searchText={searchText} setSearchText={setSearchText} />
        <CategoriesList searchText={searchText} setChatHeader={setChatHeader} setCategoryId={setCategoryId} />
      </div>
      <div className="relative overflow-y-auto scrollbar-fancy flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
        <h1 className="sticky top-0 py-6 text-center text-2xl backdrop-blur-sm">{chatHeader}</h1>
        <MessagesList categoryId={categoryId} user={user} />
      </div>
    </div>
  );
}