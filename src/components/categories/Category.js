import { useEffect, useRef, useCallback } from "react";

export default function Category({ id, category, setChatHeader, setCategoryId, innerRef, first, last }) {
  const chatHeaderRef = useRef();

  const setHeaderAndCategoryId = useCallback(() => {
    setChatHeader(chatHeaderRef.current?.innerHTML);
    setCategoryId(id);
  }, [setChatHeader, setCategoryId, id]);

  useEffect(() => {
    if (first) {
      setHeaderAndCategoryId();
    }
  }, [setHeaderAndCategoryId, first]);

  let liClassName = "pl-3 hover:cursor-pointer";
  if (!last) {
    liClassName += " mb-6";
  }

  return (
    <li ref={innerRef} onClick={() => { setHeaderAndCategoryId() }} className={liClassName}>
      <h1 ref={chatHeaderRef}>{category.unicode + " " + category.title}</h1>
      <p className="font-thin font-[system-ui]">{category.description}</p>
    </li>
  );
}