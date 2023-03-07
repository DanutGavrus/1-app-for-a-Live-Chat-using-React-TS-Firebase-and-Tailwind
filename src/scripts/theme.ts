const setTheme = () => {
  if (!localStorage.theme) {
    localStorage.theme = "light";
  }
  if (localStorage.theme === "light") {
    document.documentElement.classList.remove("dark");
  }
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  }
}

const setThemeToggleState = (setChecked: any) => {
  if (localStorage.theme === "light") {
    setChecked(false)
  }
  if (localStorage.theme === "dark") {
    setChecked(true)
  }
}

const setExplicitTheme = (checked: boolean) => {
  if (!checked) {
    localStorage.theme = "light";
  }
  if (checked) {
    localStorage.theme = "dark";
  }
  setTheme();
}

export { setTheme, setThemeToggleState, setExplicitTheme };