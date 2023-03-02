export default function Category({ category, setCategoryId, setChatHeader, toggleShowCategories, innerRef, last }) {
  const chatHeader = `${category.unicode} ${category.title}`;

  const updateChat = (categoryId, chatHeader) => {
    setCategoryId(categoryId);
    setChatHeader(chatHeader);
    toggleShowCategories();
  }

  let liClassName = "pl-3 hover:cursor-pointer";
  if (!last) {
    liClassName += " mb-6";
  }

  return (
    <li ref={innerRef} onClick={() => { updateChat(category.id, chatHeader) }} className={liClassName}>
      <h4>{chatHeader}</h4>
      <p className="font-thin font-[system-ui]">{category.description}</p>
    </li>
  );
}