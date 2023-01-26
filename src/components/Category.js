export default function Category({ innerRef, category }) {
  const test = () => {
    console.log("test");
  }

  return (
    <li ref={innerRef} onClick={test} className="pl-3 mb-6 hover:cursor-pointer">
      <h1 className="font-serif">{category.unicode + " " + category.title}</h1>
      <p className="font-thin">{category.description}</p>
    </li>
  );
}