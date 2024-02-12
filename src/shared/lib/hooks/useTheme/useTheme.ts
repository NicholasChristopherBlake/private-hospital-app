import { useContext, useState } from "react";
import { AppTheme, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const [theme, setTheme] = useState<AppTheme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};
