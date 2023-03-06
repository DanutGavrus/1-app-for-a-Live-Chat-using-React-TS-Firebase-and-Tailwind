import { useRouteError } from "react-router-dom";

type Props = {
  error: Error,
  wrapperClassName: string
}

export default function Error({ error, wrapperClassName }: Props) {
  const routeError = useRouteError();
  const errorToShow = routeError ? routeError : error;

  return (
    <div className={wrapperClassName ? wrapperClassName : ""}>
      <h1 className="font-bold text-accent">Error!</h1>
      {/* @ts-expect-error useRouteError returns many types, but in the official guide, they also return error.message */}
      <h3 className="text-center"><span>Msg: </span>{errorToShow.message}</h3>
      {/* @ts-expect-error useRouteError returns many types. If stack is set, it will be visible. */}
      {errorToShow.stack && <p className="mt-5 text-center"><span>Stack: </span>{errorToShow.stack}</p>}
    </div>
  );
}
