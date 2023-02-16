import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { setExplicitTheme, setThemeToggleState } from "../scripts/HandleTheme";

export default function RootLayout(context) {
  const toggleThemeRef = useRef();
  useEffect(() => {
    setThemeToggleState(toggleThemeRef?.current);
  }, []);

  const handleThemeToggleClick = (checked) => {
    setExplicitTheme(checked);
  }

  return (
    <div className="flex flex-col py-10 min-h-screen bg-primary text-text font-serif">
      <label className="relative inline-flex mb-1 items-center mx-auto cursor-pointer">
        <input ref={toggleThemeRef} onClick={(e) => handleThemeToggleClick(e.target.checked)} type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full   after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-black after:border-gray-300 dark:after:border-gray-700 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  dark:peer-checked:bg-secondary" />
        <span className="ml-1 text-xs text-accent font-bold">Dark mode</span>
      </label>

      <Outlet context={context} />
    </div >
  );
}