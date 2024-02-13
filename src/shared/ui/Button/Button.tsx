import { ButtonHTMLAttributes } from "react";
// import { useTranslation } from "react-i18next";
import clsx from "clsx";
import cl from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { children } = props;
  // const { t } = useTranslation();
  return (
    <button className={clsx(cl.button, { pressed: true }, ["new"])}>
      {children}
    </button>
  );
};
