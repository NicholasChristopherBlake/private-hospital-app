import { ReactNode } from "react";
import { AppTheme, ThemeContext } from "shared/lib/hooks/useTheme/ThemeContext";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
