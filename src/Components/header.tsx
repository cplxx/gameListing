import { MoonIcon, SunIcon, Search } from "lucide-react";
import logo from "../assets/Images/mãe.jpg";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/themeContext";

function Header(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} alt="Logo" />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <Search />
        <input type="text" className="px-2 bg-transparent  outline-none" />
      </div>
      <div>
        {theme === "light" ? (
          <MoonIcon
            className="bg-slate-200 text-black rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("Theme", "dark");
            }}
          />
        ) : (
          <SunIcon
            className="bg-slate-200 text-black rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("Theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
