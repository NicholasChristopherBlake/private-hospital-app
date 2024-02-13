import { Button } from "shared/ui/Button/Button";
import cls from "./MainPage.module.css";
import clsx from "clsx";

const MainPage = () => {
  return (
    <div className={clsx(cls.mainPage)}>
      <p>MainPage</p>
      <Button>some</Button>
    </div>
  );
};

export default MainPage;
