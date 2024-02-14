import clsx from "clsx";
import cl from "./Sidebar.module.css";
import { ReactNode } from "react";
import { ThemeSwitcher } from "features/ThemeSwitcher";

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  // const {} = props;

  return (
    <div data-testid="sidebar" className={clsx(cl.sidebar)}>
      Sidebar
      <div className={cl.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
