import Home from "./Pages/home";
import "./App.css";

import { useState, useEffect } from "react";
import { ThemeContext } from "./Context/themeContext";
import Header from "./Components/header";

function App(): JSX.Element {
  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? storedTheme : "dark");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#121212]" : ""
        } min-h-100vh`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
