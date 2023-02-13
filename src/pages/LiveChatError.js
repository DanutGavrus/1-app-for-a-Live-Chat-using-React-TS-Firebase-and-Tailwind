import { Link, useRouteError } from "react-router-dom";

export default function LiveChatError() {
  const error = useRouteError();

  return (
    <>
      <h2 className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Error!</h2>
      <p className="text-xl mt-5 text-center px-6"><span className="font-bold text-[var(--color-accent)]">Message: </span>{error?.message}</p>
      <p className="text-xl text-center px-6"><span className="font-bold text-[var(--color-accent)]">Stack: </span>{error?.stack}</p>
      <p className="text-lg mt-5 text-center px-6">Go back to <Link to="/" className="font-bold text-[var(--color-accent)] underline">Homepage</Link>.</p>
    </>
  );
}
