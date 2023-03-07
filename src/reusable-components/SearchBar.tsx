import { useState} from "react";

type Props = {
  placeholder: string,
  onSearchTextChanged: Function
}

export default function SearchBar({ placeholder, onSearchTextChanged }: Props) {
  const [searchValue, setSearchValue] = useState<string>('')

  const updateSearchText = (searchText: string) => {
    onSearchTextChanged(searchText);
    setSearchValue(searchText)
  }

  const clearSearchText = () => {
    onSearchTextChanged("");
    setSearchValue('')
  }

  return (
    <>
      {/*//SG if you want to pass the event value to a function you can add the function without using an arrow function onChange{updateSearchText}*/}
      <input value={searchValue} type="text" maxLength={20} placeholder={placeholder} onChange={(e) => updateSearchText(e.target.value)} className="rounded-xl mx-3 mt-6 pl-3 pr-5 py-1 border border-transparent focus:outline-none focus:border-accent dark:bg-black" />
      {/*SG You don't need an arrow function to invoke functions !!Watch out don't add () to invoke functions if you use it this way because it will fire at page load*/}
      {searchValue && <button onClick={clearSearchText} className="h-3 w-3 absolute top-6 right-5">✗</button>}
    </>
  );
}
