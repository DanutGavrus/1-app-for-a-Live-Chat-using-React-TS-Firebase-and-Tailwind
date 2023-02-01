import { useEffect } from "react";
import { useRef } from "react";

export default function Category({ id, category, setChatHeader, setCurrentCategoryId, innerRef, first, last }) {
  let liClassName = "pl-3 hover:cursor-pointer";
  if (!last) {
    liClassName += " mb-6";
  }

  const chatHeaderRef = useRef();

  useEffect(() => {
    if (first) {
      setHeaderAndCategoryId();
    }
  }, []);

  const setHeaderAndCategoryId = () => {
    setChatHeader(chatHeaderRef.current?.innerHTML);
    setCurrentCategoryId(id);
  }

  return (
    <li ref={innerRef} onClick={setHeaderAndCategoryId} className={liClassName}>
      <h1 ref={chatHeaderRef}>{category.unicode + " " + category.title}</h1>
      <p className="font-thin font-[system-ui]">{category.description}</p>
    </li>
  );
}