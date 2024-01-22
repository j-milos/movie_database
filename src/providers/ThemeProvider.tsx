import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  changeTheme: (value: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const themeValue = (localStorage.getItem("theme") ?? "light") as
      | "light"
      | "dark";
    setTheme(themeValue);
  }, []);

  //objašnjenje

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = (value: "light" | "dark") => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      "useThemeContext has to be used within <ThemeContext.Provider>"
    );
  }

  return themeContext;
};
