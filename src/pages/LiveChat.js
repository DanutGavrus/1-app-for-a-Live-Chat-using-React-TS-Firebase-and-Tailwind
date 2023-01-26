import Category from "../components/Category";

export default function LiveChat({ categories }) {

  return (
    <div className="h-[60vh] vi w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-l-xl rounded-r-md grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-accent">
      <div className="flex flex-col overflow-y-auto">
        <input type="text" placeholder="Search categories ..." className="rounded-xl m-3 px-3 py-1 box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
        <ul className="scrollbar-hide overflow-y-scroll">
          {categories.map((category) => {
            return <Category category={category} key={category.id} />
          })}
        </ul>
      </div>
      <div className="relative overflow-y-auto flex flex-col rounded-l-xl rounded-r-md col-span-3 bg-black bg-opacity-5">
        <h1 className="sticky top-0 py-3 text-center text-xl backdrop-blur-sm">Messages</h1>
        <ul>
          <li className="mb-1 ml-3">Salut, ce faci?</li>
          <li className="mb-1 ml-3">Salut, bine, tu?</li>
          <li className="mb-1 ml-3">Bine.</li>
          <li className="mb-1 ml-3">Salut, ce faci?</li>
          <li className="mb-1 ml-3">Salut, bine, tu?</li>
          <li className="mb-1 ml-3">Bine.</li>
          <li className="mb-1 ml-3">Salut, ce faci?</li>
          <li className="mb-1 ml-3">Salut, bine, tu?</li>
          <li className="mb-1 ml-3">Bine.</li>
          <li className="mb-1 ml-3">Salut, ce faci?</li>
          <li className="mb-1 ml-3">Salut, bine, tu?</li>
          <li className="mb-1 ml-3">Bine.</li>
          <li className="mb-1 ml-3">Salut, ce faci?</li>
          <li className="mb-1 ml-3">Salut, bine, tu?</li>
          <li className="mb-1 ml-3">Bine.</li>
          <li className="mb-1 ml-3">Salut, ce faci?</li>
          <li className="mb-1 ml-3">Salut, bine, tu?</li>
          <li className="mb-1 ml-3">Bine.</li>
        </ul>
        <div className="sticky bottom-0 mt-auto grid grid-cols-12">
          <input type="text" className="h-10 col-span-11 pl-3 rounded-bl-xl box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
          <button className="h-10 bg-[var(--color-aux)] rounded-tr-xl col-span-1">></button>
        </div>
      </div>
    </div>
  );
}