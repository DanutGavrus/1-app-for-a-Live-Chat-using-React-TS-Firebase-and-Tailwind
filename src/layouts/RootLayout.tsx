import {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import { setExplicitTheme, setThemeToggleState } from "../scripts/theme";

export default function RootLayout(context: LiveChatContext) {
    /*SG Best to use useState when it's possible
    *  useState is used to manage stateful values that are used in the rendering of a component. The state value is managed by the React framework and when it changes, React automatically re-renders the component.
    useRef, on the other hand, is used to hold mutable values that are not directly related to the rendering of the component. The value can be updated without triggering a re-render of the component.
    *  */
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
      setThemeToggleState(setIsChecked);
  }, []);

  const handleThemeToggleClick = (checked: boolean) => {
    setIsChecked(checked)
    setExplicitTheme(checked);
  }

  return (
    <div className="flex flex-col py-10 min-h-screen bg-primary text-text font-serif">
      <label className="relative inline-flex mx-auto mb-1 items-center cursor-pointer">
        <input checked={isChecked} onChange={(e) => handleThemeToggleClick((e.target as HTMLInputElement).checked)} type="checkbox" className="hidden peer" />
        <div className="w-11 h-6 rounded-full bg-secondary after:absolute after:h-5 after:w-5 after:transition-all after:top-[2px] after:left-[2px] after:rounded-full after:bg-white dark:after:bg-primary after:border after:border-secondary peer-checked:after:translate-x-full" />
        <p className="ml-1 text-xs"><span>Dark mode</span></p>
      </label>

      <Outlet context={context} />
    </div>
  );
}