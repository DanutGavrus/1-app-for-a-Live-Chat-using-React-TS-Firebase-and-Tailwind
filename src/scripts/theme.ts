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

const setThemeToggleState = (toggle: HTMLInputElement) => {
  if (localStorage.theme === "light") {
    toggle.checked = false;
  }
  if (localStorage.theme === "dark") {
    toggle.checked = true;
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