import { createContext } from "react";

export type AppTheme = "light" | "dark";

type ThemeContextType = {
  theme: AppTheme;
  toggleTheme?: () => void;
};

export const LOCAL_STORAGE_THEME_KEY = "theme_key";

export const initialTheme: AppTheme = localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY
) as AppTheme;

const initialContext: ThemeContextType = {
  theme: initialTheme,
};

export const ThemeContext = createContext(initialContext);
