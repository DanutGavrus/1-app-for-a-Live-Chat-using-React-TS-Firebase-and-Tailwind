import { cloneElement, useCallback, useState } from "react";
import { useRef, useLayoutEffect } from "react";
import Category from "./Category";
import SearchBar from "../../../../reusable-components/SearchBar";

export default function CategoriesList({ innerRef, categoriesList, setCategoryId, setChatHeader, toggleShowCategories }) {
  const [categoriesFiltered, setCategoriesFiltered] = useState(categoriesList);

  const scrollDownBtnRef = useRef();
  const lastCategoryRef = useRef();
  const scrollUpBtnRef = useRef();
  const firstCategoryRef = useRef();
  const categoriesListRef = useRef();

  const onSearchTextChanged = (searchText) => {
    if (searchText?.length > 0) {
      setCategoriesFiltered(categoriesList?.filter(category => category.title.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setCategoriesFiltered(categoriesList);
    }
  }

  const manageScrollBtnsVisibility = useCallback(() => {
    // Categories overflow
    if (categoriesListRef?.current?.scrollHeight > categoriesListRef?.current?.clientHeight) {
      // Scrolled to bottom
      if (categoriesListRef?.current?.scrollHeight - Math.ceil(categoriesListRef?.current?.scrollTop) <= categoriesListRef?.current?.clientHeight) {
        toggleScrollBtnVisibility("bottom");
      }
      else if (categoriesListRef?.current?.scrollTop === 0) {
        toggleScrollBtnVisibility("top");
      }
    }
    else {
      toggleScrollBtnVisibility("none");
    }
  }, []);

  useLayoutEffect(() => {
    manageScrollBtnsVisibility();

    window.addEventListener("resize", manageScrollBtnsVisibility);
    return () => {
      window.removeEventListener("resize", manageScrollBtnsVisibility);
    };
  }, [manageScrollBtnsVisibility, categoriesFiltered]);

  const toggleScrollBtnVisibility = (position) => {
    if (position === "bottom") {
      scrollDownBtnRef.current?.classList.add("invisible");
      scrollUpBtnRef.current?.classList.remove("invisible");
    }
    else if (position === "top") {
      scrollUpBtnRef.current?.classList.add("invisible");
      scrollDownBtnRef.current?.classList.remove("invisible");
    }
    else if (position === "none") {
      scrollUpBtnRef.current?.classList.add("invisible");
      scrollDownBtnRef.current?.classList.add("invisible");
    }
  };

  const scrollCategoriesBottom = () => {
    toggleScrollBtnVisibility("bottom");
    lastCategoryRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCategoriesTop = () => {
    toggleScrollBtnVisibility("top");
    firstCategoryRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={innerRef} className="relative flex sm:flex flex-col col-span-4 sm:col-span-1 overflow-y-hidden">
      <SearchBar placeholder="Search categories ..." onSearchTextChanged={onSearchTextChanged} />
      <>
        <button ref={scrollUpBtnRef} onClick={scrollCategoriesTop} className="h-6 invisible font-mono">{"↑"}</button>

        {categoriesFiltered?.length === 0 && <h4 className="text-center">Sorry, there is no matching category for this search.</h4>}
        {categoriesFiltered?.length > 0 &&
          <ul ref={categoriesListRef} onScroll={manageScrollBtnsVisibility} className="scrollbar-hide overflow-y-scroll">
            {categoriesFiltered?.map((category, i, { length }) => {
              let categoryComponent = <Category key={category.id} category={category} setCategoryId={setCategoryId} setChatHeader={setChatHeader} toggleShowCategories={toggleShowCategories} />;
              if (i === 0) {
                categoryComponent = cloneElement(categoryComponent, { innerRef: firstCategoryRef });
              }
              if (i === length - 1) {
                categoryComponent = cloneElement(categoryComponent, { innerRef: lastCategoryRef, last: true });
              }
              return categoryComponent;
            })}
          </ul>
        }

        <button ref={scrollDownBtnRef} onClick={scrollCategoriesBottom} className="h-6 invisible font-mono">{"↓"}</button>
      </>
    </div>
  );
}
