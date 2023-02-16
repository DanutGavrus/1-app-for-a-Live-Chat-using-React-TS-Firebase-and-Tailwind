import { useRouteError } from "react-router-dom";

export default function Error({ error, wrapperClassName }) {
  const routeError = useRouteError();
  const errorToShow = routeError ? routeError : error;

  return (
    <div className={wrapperClassName ? wrapperClassName : ""}>
      <h2 className="text-3xl text-center font-bold text-accent">Error!</h2>
      <p className="text-xl text-center"><span className="font-bold text-accent">Msg: </span>{errorToShow.message}</p>
      {routeError && <p className="mt-5 text-xl text-center"><span className="font-bold text-accent">Stack: </span>{errorToShow.stack}</p>}
    </div>
  );
}
