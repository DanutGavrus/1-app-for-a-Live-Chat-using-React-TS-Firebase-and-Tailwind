import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2 className="text-3xl text-center px-6 font-bold text-[var(--color-accent)]">Page not found!</h2>
      <p className="text-xl text-center px-6">The specified route was not found on this website. Please check the URL for mistakes and try again.</p>
      <p className="text-lg mt-5 text-center px-6">Go back to <Link to="/" className="font-bold text-[var(--color-accent)] underline">Homepage</Link>.</p>
    </>
  )
}