import { useEffect } from "react";

export default function Category({ id, category, refreshMessagesList, innerRef, first, last }) {
  const chatHeader = category.unicode + " " + category.title;

  useEffect(() => {
    if (first) {
      refreshMessagesList(id, chatHeader);
    }
  }, [first, refreshMessagesList, id, chatHeader]);

  let liClassName = "pl-3 hover:cursor-pointer";
  if (!last) {
    liClassName += " mb-6";
  }

  return (
    <li ref={innerRef} onClick={() => { refreshMessagesList(id, chatHeader) }} className={liClassName}>
      <h1>{chatHeader}</h1>
      <p className="font-thin font-[system-ui]">{category.description}</p>
    </li>
  );
}