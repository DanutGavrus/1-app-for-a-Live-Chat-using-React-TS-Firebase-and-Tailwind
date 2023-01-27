import { useRef } from "react";

export default function Category({ innerRef, category, setChatHeader }) {
  const chatHeaderRef = useRef();

  const updateChatHeader = () => {
    setChatHeader(chatHeaderRef.current?.innerHTML);
  }

  return (
    <li ref={innerRef} onClick={updateChatHeader} className="pl-3 mb-6 hover:cursor-pointer">
      <h1 ref={chatHeaderRef} className="font-serif">{category.unicode + " " + category.title}</h1>
      <p className="font-thin">{category.description}</p>
    </li>
  );
}