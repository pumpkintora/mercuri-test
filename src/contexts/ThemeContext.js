import { useState, createContext } from "react";

export const ThemeContext = createContext({
  theme: "",
  setTheme: (theme) => {},
});

export function ThemeProvider({ children }) {
  const defaultDark = window.matchMedia("(prefer-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
