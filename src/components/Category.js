export default function Category({ category }) {
  return (
    <li className="">
      {/* <img src={category.src} /> */}
      <h1>{category.title}</h1>
      <p>{category.description}</p>
    </li>
  );
}