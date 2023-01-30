import { useRef } from "react";

export default function Category({ innerRef, category, setChatHeader, last }) {
  let liClassName = "pl-3 hover:cursor-pointer";
  if (!last) {
    liClassName += " mb-6";
  }

  const chatHeaderRef = useRef();

  const updateChatHeader = () => {
    setChatHeader(chatHeaderRef.current?.innerHTML);
  }

  return (
    <li ref={innerRef} onClick={updateChatHeader} className={liClassName}>
      <h1 ref={chatHeaderRef} className="font-serif">{category.unicode + " " + category.title}</h1>
      <p className="font-thin">{category.description}</p>
    </li>
  );
}