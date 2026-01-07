document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("light-toggle");

  const iconSystem = document.getElementById("light-toggle-system");
  const iconDark   = document.getElementById("light-toggle-dark");
  const iconLight  = document.getElementById("light-toggle-light");

  function setIcons(theme) {
    iconSystem.classList.remove("active");
    iconDark.classList.remove("active");
    iconLight.classList.remove("active");

    if (theme === "dark") {
      iconDark.classList.add("active");
    } else if (theme === "light") {
      iconLight.classList.add("active");
    } else {
      iconSystem.classList.add("active");
    }
  }

  function getTheme() {
    return document.documentElement.getAttribute("data-theme");
  }

  // Initial state
  setIcons(getTheme());

  btn.addEventListener("click", () => {
    const current = getTheme();

    if (current === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      setIcons("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIcons("dark");
    }
  });
});
