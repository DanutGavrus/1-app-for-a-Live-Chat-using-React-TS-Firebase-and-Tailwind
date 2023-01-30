import { cloneElement, useCallback, useState } from "react";
import { useRef, useEffect } from "react";
import Category from "../components/Category";

export default function CategoriesList({ categoriesList, setChatHeader }) {
  // TODO: Add clear icon to categories search bar
  // TOOD: Update messages based on the current category
  const scrollDownBtn = useRef();
  const lastCategoryRef = useRef();
  const scrollUpBtn = useRef();
  const firstCategoryRef = useRef();
  const categoriesListRef = useRef();
  const searchBarRef = useRef();

  const [searchText, setSearchText] = useState("");

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

  return (
    <div className="flex flex-col overflow-y-auto">
      <input ref={searchBarRef} type="text" placeholder="Search categories ..." onChange={(e) => { setSearchText(e.target.value) }} className="font-serif rounded-xl mx-3 mt-6 px-3 py-1 box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
      <button ref={scrollUpBtn} onClick={scrollCategoriesTop} className="h-6 invisible">{"↑"}</button>
      <ul ref={categoriesListRef} onScroll={manageScrollBtnsVisibility} className="scrollbar-hide overflow-y-scroll">
        {categoriesList?.filter(category => category.title.toLowerCase().includes(searchText.toLowerCase())).map((category, i, { length }) => {
          let categoryComponent = <Category key={category.id} category={category} setChatHeader={setChatHeader} />;
          if (i === 0) {
            categoryComponent = cloneElement(categoryComponent, { innerRef: firstCategoryRef });
          }
          if (i === length - 1) {
            categoryComponent = cloneElement(categoryComponent, { innerRef: lastCategoryRef, last: true });
          }
          return categoryComponent;
        })}
      </ul>
      <button ref={scrollDownBtn} onClick={scrollCategoriesBottom} className="h-6 invisible">{"↓"}</button>
    </div>
  );
}
