import clsx from "clsx";
import cl from "./AboutPage.module.css";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return <div className={clsx(cl.aboutPage)}>{t("About Page")}</div>;
};

export default AboutPage;
