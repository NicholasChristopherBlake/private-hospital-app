import { ButtonHTMLAttributes } from "react";
// import { useTranslation } from "react-i18next";
import clsx from "clsx";
import cl from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "small" | "medium" | "large";
  variant: ButtonVariants;
}

type ButtonVariants = "accent" | "outlined" | "clear";

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    type = "button",
    variant = "accent",
    ...otherProps
  } = props;
  // const { t } = useTranslation();
  return (
    <button
      className={clsx(cl.button, [cl[variant]], className)}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
