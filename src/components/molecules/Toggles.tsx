"use client";
import { useTheme } from "next-themes";

const Toggle: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div className="flex justify-center ml-4">
        <span className="text-sm text-slate-500 mr-2">light</span>
        <input
          type="checkbox"
          id="dark-toggle"
          checked={theme === "dark"}
          onChange={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="hidden"
        />
        <label htmlFor="dark-toggle">
          <div className="w-9 h-5 bg-slate-800 rounded-full flex items-center p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full toggle-circle transition duration-300 ease-in-out"></div>
          </div>
        </label>
        <span className="text-sm text-slate-500 ml-2">dark</span>
      </div>
    </>
  );
};

export default Toggle;
