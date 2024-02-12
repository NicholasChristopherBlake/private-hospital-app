import { createContext } from "react";

export type AppTheme = "light" | "dark";

type ThemeContextType = {
  theme: AppTheme;
  toggleTheme?: (theme: AppTheme) => void;
};

export const LOCAL_STORAGE_THEME_KEY = "theme_key";

// const initialTheme: AppTheme =
//   (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) || "light";

const initialContext: ThemeContextType = {
  theme: "light",
};

export const ThemeContext = createContext(initialContext);
