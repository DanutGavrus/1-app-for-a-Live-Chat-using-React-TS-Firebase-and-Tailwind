export default function Category({ id, category, setCategoryId, setChatHeader, innerRef, last }) {
  const chatHeader = category.unicode + " " + category.title;

  const updateChat = (categoryId, chatHeader) => {
    setCategoryId(categoryId);
    setChatHeader(chatHeader);
  }

  let liClassName = "pl-3 hover:cursor-pointer";
  if (!last) {
    liClassName += " mb-6";
  }

  return (
    <li ref={innerRef} onClick={() => { updateChat(id, chatHeader) }} className={liClassName}>
      <h1>{chatHeader}</h1>
      <p className="font-thin font-[system-ui]">{category.description}</p>
    </li>
  );
}