import { useRef } from "react";

export default function SearchBar({ placeholder, searchText, setSearchText }) {

  const searchBarRef = useRef();

  const updateSearchText = (searchText) => {
    setSearchText(searchText);
  }

  const clearSearchText = () => {
    setSearchText("");
    searchBarRef.current.value = "";
  }

  return (
    <>
      <input ref={searchBarRef} type="text" placeholder={placeholder} onChange={(e) => updateSearchText(e.target.value)} className="rounded-xl mx-3 mt-6 pl-3 pr-4 py-1 box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
      {searchText && <button onClick={() => clearSearchText()} className="h-3 w-3 absolute top-7 right-4 items-center">✗</button>}
    </>
  );
}
