export default function MessageBar() {
  return (
    <div className="sticky bottom-0 mt-auto grid grid-cols-12">
      <input type="text" className="h-10 col-span-11 pl-3 rounded-bl-xl box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
      <button className="h-10 bg-[var(--color-aux)] rounded-tr-xl col-span-1">></button>
    </div>
  );
}