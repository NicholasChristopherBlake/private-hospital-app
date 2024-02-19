import clsx from "clsx";
import cl from "./NotFoundPage.module.css";
import { ReactNode } from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { Button } from "shared/ui/Button/Button";
import { PageError } from "widgets/PageError";

interface NotFoundPageProps {
  className?: string;
  children?: ReactNode;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  // const {} = props;
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  const backToIndex = () => {
    navigate("/");
  };

  if (isRouteErrorResponse(error)) {
    return (
      <div className={clsx(cl.notFoundPage)}>
        <h1>Oops!</h1>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <Button variant="accent" onClick={backToIndex}>
          Back To Homepage
        </Button>
      </div>
    );
  } else {
    return (
      <div className={clsx(cl.notFoundPage)}>
        <PageError />
      </div>
    );
  }
};
