import { Button } from "shared/ui/Button/Button";
import cl from "./MainPage.module.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className={clsx(cl.mainPage)}>
      <p>{t("Main Page")}</p>
      <Button>some</Button>
    </div>
  );
};

export default MainPage;
