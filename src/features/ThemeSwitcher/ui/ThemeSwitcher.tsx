import clsx from "clsx";
import cl from "./ThemeSwitcher.module.css";
import { ReactNode } from "react";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";

interface ThemeSwitcherProps {
  className?: string;
  children?: ReactNode;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const {} = props;
  const { toggleTheme } = useTheme();

  return (
    <div className={clsx(cl.themeSwitcher)}>
      <label className={cl.label}>
        <input className={cl.input} type="checkbox" onChange={toggleTheme} />
        <span className={cl.slider} />
      </label>
    </div>
  );
};
