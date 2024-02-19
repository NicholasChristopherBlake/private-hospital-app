import clsx from "clsx";
import cl from "./Sidebar.module.css";
import { ReactNode, useState } from "react";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  // const {} = props;

  return (
    <div
      data-testid="sidebar"
      className={clsx(cl.sidebar, { [cl.collapsed]: collapsed })}
    >
      <Button
        variant="outlined"
        onClick={onCollapse}
        className={cl.collapseBtn}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
