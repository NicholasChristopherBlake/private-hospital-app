import clsx from "clsx";
import cl from "./NotFoundPage.module.css";
import { ReactNode } from "react";
import { useRouteError } from "react-router-dom";

interface NotFoundPageProps {
  className?: string;
  children?: ReactNode;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  // const {} = props;
  const error: ReturnType<typeof useRouteError> = useRouteError();
  console.error(error);

  return (
    <div className={clsx(cl.notFoundPage)}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
};
