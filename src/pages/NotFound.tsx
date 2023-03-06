import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 className="font-bold text-accent">Page not found!</h1>
      <h3 className="text-center">The specified route was not found on this website. Please check the URL for mistakes and try again.</h3>
      <p className="mt-5 text-center">Go back to <span className="underline"><Link to="/">Homepage</Link></span>.</p>
    </>
  )
}