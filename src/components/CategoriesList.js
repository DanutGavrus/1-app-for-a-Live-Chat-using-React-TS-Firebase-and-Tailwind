import { useRef, useEffect } from "react";
import Category from "../components/Category";

export default function CategoriesList({ categories }) {
  const scrollDownBtn = useRef();
  const lastCategoryRef = useRef();
  const scrollUpBtn = useRef();
  const firstCategoryRef = useRef();
  const categoriesListRef = useRef();

  useEffect(() => {
    manageScrollBtnsVisibility();

    window.addEventListener("resize", manageScrollBtnsVisibility);
    return () => {
      window.removeEventListener("resize", manageScrollBtnsVisibility);
    };
  }, []);

  const manageScrollBtnsVisibility = () => {
    // Scrolled to bottom
    if (categoriesListRef.current?.scrollHeight - Math.ceil(categoriesListRef.current?.scrollTop) <= categoriesListRef?.current.clientHeight) {
      scrollDownBtn.current?.classList.add("hidden");
      scrollUpBtn.current?.classList.remove("hidden");
    }

    // Scrolled to top
    if (categoriesListRef.current?.scrollTop === 0) {
      scrollUpBtn.current?.classList.add("hidden");
      scrollDownBtn.current?.classList.remove("hidden");
    }
  }

  const scrollCategoriesDown = () => {
    lastCategoryRef.current?.scrollIntoView({ behavior: "smooth" });
    scrollDownBtn.current?.classList.add("hidden");
    scrollUpBtn.current?.classList.remove("hidden");
  }

  const scrollCategoriesUp = () => {
    firstCategoryRef.current?.scrollIntoView({ behavior: "smooth" });
    scrollUpBtn.current?.classList.add("hidden");
    scrollDownBtn.current?.classList.remove("hidden");
  }

  return (
    <div className="flex flex-col overflow-y-auto">
      <input type="text" placeholder="Search categories ..." className="rounded-xl mx-3 my-6 px-3 py-1 box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
      <button ref={scrollUpBtn} onClick={scrollCategoriesUp} className="hidden">{`\u2191`}</button>
      <ul ref={categoriesListRef} onScroll={manageScrollBtnsVisibility} className="scrollbar-hide overflow-y-scroll">
        {categories.map((category, i, { length }) => {
          if (i === 0) return <Category innerRef={firstCategoryRef} category={category} key={category.id} />
          if (i === length - 1) return <Category innerRef={lastCategoryRef} category={category} key={category.id} />
          return <Category category={category} key={category.id} />
        })}
      </ul>
      <button ref={scrollDownBtn} onClick={scrollCategoriesDown} className="hidden">{`\u2193`}</button>
    </div>
  )
}
