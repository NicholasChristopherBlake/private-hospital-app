import clsx from "clsx";
import cl from "./AppLink.module.css";
import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface AppLinkProps extends NavLinkProps {
  className?: string;
  children?: ReactNode;
  to: string;
}

export const AppLink = (props: AppLinkProps) => {
  const { children, ...otherProps } = props;

  return (
    <NavLink className={clsx(cl.appLink)} {...otherProps}>
      {children}
    </NavLink>
  );
};
