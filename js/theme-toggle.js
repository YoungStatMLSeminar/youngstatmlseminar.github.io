const root = document.documentElement;
const btn = document.getElementById("light-toggle");

const icons = {
  system: document.getElementById("light-toggle-system"),
  dark: document.getElementById("light-toggle-dark"),
  light: document.getElementById("light-toggle-light"),
};

function setActive(icon) {
  Object.values(icons).forEach(i => i.classList.remove("active"));
  icon.classList.add("active");
}

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    setActive(icons.dark);
  } else if (theme === "light") {
    root.removeAttribute("data-theme");
    setActive(icons.light);
  } else {
    root.removeAttribute("data-theme");
    setActive(icons.system);
  }
}

let theme = localStorage.getItem("theme") || "system";
applyTheme(theme);

btn.addEventListener("click", () => {
  theme = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
  localStorage.setItem("theme", theme);
  applyTheme(theme);
});
