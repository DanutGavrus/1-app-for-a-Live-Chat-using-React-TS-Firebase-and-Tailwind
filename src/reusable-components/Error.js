import { useRouteError } from "react-router-dom";

export default function Error({ error, wrapperClassName }) {
  const routeError = useRouteError();
  const errorToShow = routeError ? routeError : error;

  return (
    <div className={wrapperClassName ? wrapperClassName : ""}>
      <h1 className="font-bold text-accent">Error!</h1>
      <h3 className="text-center"><span>Msg: </span>{errorToShow.message}</h3>
      {routeError && <p className="mt-5 text-center"><span>Stack: </span>{errorToShow.stack}</p>}
    </div>
  );
}
