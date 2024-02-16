import { ButtonHTMLAttributes } from "react";
// import { useTranslation } from "react-i18next";
import clsx from "clsx";
import cl from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "small" | "medium" | "large";
}

export const Button = (props: ButtonProps) => {
  const { children, type = "button", ...otherProps } = props;
  // const { t } = useTranslation();
  return (
    <button className={clsx(cl.button, {}, [])} type={type} {...otherProps}>
      {children}
    </button>
  );
};
