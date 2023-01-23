import Category from "../components/Category";

export default function LiveChat({ categories }) {
  return (
    <div className="h-[60vh] w-[90vw] min-h-[250px] max-h-[500px] min-w-[500px] max-w-[1000px] rounded-xl grid grid-cols-4 mx-auto bg-gradient-to-br from-color-second-to-accent">
      <div className="flex flex-col">
        <input type="text" placeholder="Search categories ..." className="rounded-xl px-3 py-1 box-border w-11/12 my-3 mx-auto border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
        <ul className="">
          {categories.map(category => {
            return <Category category={category} key={category.id} />
          })}
        </ul>
      </div>
      {/* <div className="flex relative flex-col rounded-xl col-span-3 border-2 border-black bg-black overflow-y-scroll bg-opacity-20"> */}
      <div className="flex relative flex-col rounded-xl col-span-3 border-2 border-primary bg-primary overflow-y-scroll bg-opacity-20">
          {/* Am pus pe tailwind.config exemplu de cum trebe sa pui pallete sa poti accesa cu border-primary text-primary etc */}
        <h1 className="py-3 backdrop-blur-sm sticky top-0 text-center text-xl">Messages</h1>
        <ul>
          <li className="mb-1 ml-2">Salut, ce faci?</li>
          <li className="mb-1 ml-2">Salut, bine, tu?</li>
          <li className="mb-1 ml-2">Bine.</li>
          <li className="mb-1 ml-2">Salut, ce faci?</li>
          <li className="mb-1 ml-2">Salut, bine, tu?</li>
          <li className="mb-1 ml-2">Bine.</li>
          <li className="mb-1 ml-2">Salut, ce faci?</li>
          <li className="mb-1 ml-2">Salut, bine, tu?</li>
          <li className="mb-1 ml-2">Bine.</li>
          <li className="mb-1 ml-2">Bine.</li>
          <li className="mb-1 ml-2">Salut, ce faci?</li>
          <li className="mb-1 ml-2">Salut, bine, tu?</li>
          <li className="mb-1 ml-2">Bine.</li>
          <li className="mb-1 ml-2">Bine.</li>
          <li className="mb-1 ml-2">Salut, ce faci?</li>
          <li className="mb-1 ml-2">Salut, bine, tu?</li>
          <li className="mb-1 ml-2">Bine.</li>
        </ul>
        <div className="h-10 sticky bottom-0 mt-auto grid grid-cols-12">
          <input type="text" className="col-span-11 rounded-bl-xl pl-1 opacity-75" />
          <button className="bg-[var(--color-second)] col-span-1 rounded-br-lg"></button>
        </div>
      </div>
    </div>
  );
}