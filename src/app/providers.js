"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "day",
  toggleTheme: () => {},
  setTheme: () => {},
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("day");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  // Add theme class to body/html
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    // Remove previous classes
    root.classList.remove("light", "dark");
    body.classList.remove("day-mode", "night-mode");

    if (theme === "night") {
      root.classList.add("dark");
      body.classList.add("night-mode");
    } else {
      root.classList.add("light");
      body.classList.add("day-mode");
    }
  }, [theme]);

  // Initial local storage check can be added here later if persistence is desired

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
