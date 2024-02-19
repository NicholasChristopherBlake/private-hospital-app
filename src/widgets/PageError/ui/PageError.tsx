import { useTranslation } from "react-i18next";
import cl from "./PageError.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/Button/Button";

interface PageErrorProps {
  className?: string;
}

export const PageError = (props: PageErrorProps) => {
  const navigate = useNavigate();
  const backToIndex = () => {
    navigate("/");
  };
  const onPageReload = () => {
    location.reload();
  };
  const { t } = useTranslation();

  return (
    <div className={clsx(cl.pageError, {}, [])}>
      <h1>Oops, unknown error occured</h1>
      <Button variant="accent" onClick={onPageReload}>
        Reload Page
      </Button>
      <Button variant="accent" onClick={backToIndex}>
        Back to MainPage
      </Button>
    </div>
  );
};
