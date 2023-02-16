import { useRef } from "react";

export default function SearchBar({ placeholder, onSearchTextChanged }) {

  const searchBarRef = useRef();

  const updateSearchText = (searchText) => {
    onSearchTextChanged(searchText);
  }

  const clearSearchText = () => {
    onSearchTextChanged("");
    searchBarRef.current.value = "";
  }

  return (
    <>
      <input ref={searchBarRef} type="text" maxLength="20" placeholder={placeholder} onChange={(e) => updateSearchText(e.target.value)} className="rounded-xl mx-3 mt-6 pl-3 pr-5 py-1 box-border border border-transparent focus:outline-none focus:border-accent dark:bg-black" />
      {searchBarRef?.current?.value && <button onClick={() => clearSearchText()} className="h-3 w-3 absolute top-6 right-5">✗</button>}
    </>
  );
}
