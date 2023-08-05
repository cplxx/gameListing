import React, { createContext } from "react";

interface ThemeData {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext({} as ThemeData);
