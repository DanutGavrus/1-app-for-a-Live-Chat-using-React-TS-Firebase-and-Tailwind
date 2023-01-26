import CategoriesList from "../components/CategoriesList";
import MessagesList from "../components/MessagesList";

export default function LiveChat({ categories }) {
  return (
    <div className="h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-accent">
      <CategoriesList categories={categories} />
      <MessagesList />
    </div>
  );
}