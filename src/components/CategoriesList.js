import { cloneElement, useCallback, useState } from "react";
import { useRef, useEffect } from "react";
import Category from "../components/Category";

export default function CategoriesList({ categoriesList, setChatHeader }) {
  // TOOD: Update messages based on the current category
  const scrollDownBtn = useRef();
  const lastCategoryRef = useRef();
  const scrollUpBtn = useRef();
  const firstCategoryRef = useRef();
  const categoriesListRef = useRef();
  const searchBarRef = useRef();

  const [searchText, setSearchText] = useState("");
  const [categoriesFiltered, setCategoriesFiltered] = useState(categoriesList);

  const manageScrollBtnsVisibility = useCallback(() => {
    // Categories overflow
    if (categoriesListRef.current?.scrollHeight > categoriesListRef.current?.clientHeight) {
      // Scrolled to bottom
      if (categoriesListRef.current?.scrollHeight - Math.ceil(categoriesListRef.current?.scrollTop) <= categoriesListRef.current?.clientHeight) {
        toggleScrollBtnVisibility("bottom");
      }
      else if (categoriesListRef.current?.scrollTop === 0) {
        toggleScrollBtnVisibility("top");
      }
    }
    else {
      toggleScrollBtnVisibility("none");
    }
    return true;
  }, []);

  useEffect(() => {
    manageScrollBtnsVisibility();

    window.addEventListener("resize", manageScrollBtnsVisibility);
    return () => {
      window.removeEventListener("resize", manageScrollBtnsVisibility);
    };
  }, [manageScrollBtnsVisibility, searchText]);

  const toggleScrollBtnVisibility = (position) => {
    if (position === "bottom") {
      scrollDownBtn.current?.classList.add("invisible");
      scrollUpBtn.current?.classList.remove("invisible");
    }
    else if (position === "top") {
      scrollUpBtn.current?.classList.add("invisible");
      scrollDownBtn.current?.classList.remove("invisible");
    }
    else if (position === "none") {
      scrollUpBtn.current?.classList.add("invisible");
      scrollDownBtn.current?.classList.add("invisible");
    }
  };

  const scrollCategoriesBottom = () => {
    toggleScrollBtnVisibility("bottom");
    lastCategoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCategoriesTop = () => {
    toggleScrollBtnVisibility("top");
    firstCategoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchChange = (searchText) => {
    setSearchText(searchText);
    setCategoriesFiltered(categoriesList?.filter(category => category.title.toLowerCase().includes(searchText.toLowerCase())));
  }

  const clearSearchText = () => {
    setSearchText("");
    setCategoriesFiltered(categoriesList);
    searchBarRef.current.value = "";
  }

  return (
    <div className="flex flex-col overflow-y-auto relative">
      <input ref={searchBarRef} type="text" placeholder="Search categories ..." onChange={(e) => { handleSearchChange(e.target.value) }} className="rounded-xl mx-3 mt-6 pl-3 pr-4 py-1 box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
      {searchText && <button onClick={clearSearchText} className="h-3 w-3 absolute top-7 right-4 items-center">✗</button>}
      <button ref={scrollUpBtn} onClick={scrollCategoriesTop} className="h-6 invisible">{"↑"}</button>
      {categoriesFiltered.length > 0 && <ul ref={categoriesListRef} onScroll={manageScrollBtnsVisibility} className="scrollbar-hide overflow-y-scroll">
        {categoriesFiltered.map((category, i, { length }) => {
          let categoryComponent = <Category key={category.id} category={category} setChatHeader={setChatHeader} />;
          if (i === 0) {
            categoryComponent = cloneElement(categoryComponent, { innerRef: firstCategoryRef });
          }
          if (i === length - 1) {
            categoryComponent = cloneElement(categoryComponent, { innerRef: lastCategoryRef, last: true });
          }
          return categoryComponent;
        })}
      </ul>}
      {categoriesFiltered.length === 0 && <p className="px-3 text-center">Sorry, there is no matching category name for this search.</p>}
      <button ref={scrollDownBtn} onClick={scrollCategoriesBottom} className="h-6 invisible">{"↓"}</button>
    </div>
  );
}
