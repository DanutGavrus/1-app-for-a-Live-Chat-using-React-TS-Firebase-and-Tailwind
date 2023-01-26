import { useRef, useEffect } from "react";
import Category from "../components/Category";

export default function CategoriesList({ categories }) {
  const scrollDownBtn = useRef();
  const lastCategoryRef = useRef();
  const scrollUpBtn = useRef();
  const firstCategoryRef = useRef();
  const categoriesListRef = useRef();

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

  const manageScrollDownBtnVisibility = () => {
    if (categoriesListRef.current?.scrollHeight > categoriesListRef.current?.clientHeight) {
      scrollDownBtn.current?.classList.remove("hidden");
    } else {
      scrollDownBtn.current?.classList.add("hidden");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const handleResize = () => {
        console.log("Layout")
      }

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col overflow-y-auto">
      <input type="text" placeholder="Search categories ..." className="rounded-xl m-3 px-3 py-1 box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
      <button ref={scrollUpBtn} onClick={scrollCategoriesUp} className="hidden">{`\u2191`}</button>
      <ul ref={categoriesListRef} className="scrollbar-hide overflow-y-scroll">
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
