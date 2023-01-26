export default function Category({ innerRef, category }) {
  return (
    <li ref={innerRef} className="ml-3 mb-4">
      {/* <img src={category.src} /> */}
      <h1>{category.title}</h1>
      <p>{category.description}</p>
    </li>
  );
}