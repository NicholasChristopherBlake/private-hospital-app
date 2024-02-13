import clsx from "clsx";
import cl from "./Navbar.module.css";
import { ReactNode } from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
  children?: ReactNode;
}

export const Navbar = (props: NavbarProps) => {
  const {} = props;

  return (
    <nav className={clsx(cl.navbar)}>
      <div className={cl.logo}>Logo</div>
      <div className={cl.links}>
        <AppLink to='/'>Main</AppLink>
        <AppLink to='about'>About</AppLink>
      </div>
      
    </nav>
  );
};
