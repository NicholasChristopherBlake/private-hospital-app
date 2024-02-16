import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Button } from "shared/ui/Button/Button";
import i18next from "shared/config/i18next/i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  // const {} = props;
  const { t } = useTranslation();
  const changeLanguage = async () => {
    i18next.language === "ru"
      ? await i18next.changeLanguage("en")
      : await i18next.changeLanguage("ru");
  };

  return (
    <Button data-testid="lang-switcher" onClick={changeLanguage}>
      {t("Change Language")}
    </Button>
  );
};
